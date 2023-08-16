import * as React from "react";
import {
  useDisclosure,
  Button,
  ButtonProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  CheckboxGroup,
  Stack,
  Textarea,
  Box,
  useToast,
  Radio,
  RadioGroup,
  VStack,
  FormErrorMessage,
  FormControl,
  FormLabel,
  FormHelperText,
  Skeleton,
} from "@chakra-ui/react";
import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { mdiFlag } from "@mdi/js";
import { fetchReportIssues, reportAction, ReportIssuesType } from "../api/report";
import { MdIcon } from "./MdIcon";

export enum ReportRecipient {
  User = "user",
  Company = "company",
  Job = "job",
  Problem = "problem",
}

const RECIPIENT_TO_LABEL = {
  [ReportRecipient.User]: "کاربر",
  [ReportRecipient.Job]: "فرصت شغلی",
  [ReportRecipient.Company]: "شرکت",
  [ReportRecipient.Problem]: "سؤال",
};

type FormDataType = {
  choices: ReportIssuesType[];
  selectError: string;
  checkedIssues: number[];
  checkedRadio: string | null;
  description: string;
};

const initialFormState: FormDataType = {
  choices: [],
  checkedIssues: [],
  checkedRadio: null,
  description: "",
  selectError: null,
};

const FormContext = createContext<{ formState: FormDataType; setFormState: Dispatch<SetStateAction<FormDataType>> }>({
  formState: initialFormState,
  setFormState: () => {},
});

const ChoiceItem = ({ choice }: { choice: ReportIssuesType }) => {
  const { formState, setFormState } = useContext(FormContext);
  const onChange = (e) => {
    const targetID = parseInt(e.target.value, 10);
    const parentID = formState.choices.filter((c) => c.children.map((child) => child.id).includes(targetID))[0].id;
    if (formState.checkedRadio !== parentID.toString()) {
      setFormState({ ...formState, checkedRadio: parentID.toString(), checkedIssues: [targetID] });
      return;
    }
    if (formState.checkedIssues.includes(targetID)) {
      setFormState({
        ...formState,
        checkedIssues: formState.checkedIssues.filter((id) => id !== targetID),
      });
    } else {
      setFormState({
        ...formState,
        checkedIssues: [...formState.checkedIssues, targetID],
      });
    }
  };
  return (
    <>
      <Radio value={choice.id.toString()} key={choice.id} py={0.5}>
        {choice.text}
      </Radio>
      {choice.children.length > 0 && (
        <Stack pr={6}>
          <CheckboxGroup value={formState.checkedIssues}>
            {choice.children.map((child) => (
              <Checkbox key={child.id} value={child.id} onChange={onChange} py={0.5}>
                {child.text}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </Stack>
      )}
    </>
  );
};

const ChoiceList = ({ isLoaded }: { isLoaded: boolean }) => {
  const { formState, setFormState } = useContext(FormContext);

  const onClick = (e) => {
    setFormState({
      ...formState,
      checkedRadio: e,
      checkedIssues: formState.choices.filter((c) => c.id.toString() === e)[0].children.map((c) => c.id),
    });
  };

  return (
    <FormControl as={VStack} align="stretch" isInvalid={formState.selectError !== null}>
      <FormLabel>چه مشکلی وجود دارد؟</FormLabel>
      <FormHelperText>
        لطفاً نزدیک‌‌ترین گزینه را انتخاب کنید تا ما هر چه سریع‌تر و دقیق‌تر مشکل را بررسی کنیم.
      </FormHelperText>
      <Skeleton isLoaded={isLoaded}>
        <Box
          px={[3, null, 6]}
          py={[0, null, 1]}
          overflowY="auto"
          minH="10rem"
          maxH="20rem"
          borderWidth={formState.selectError === null ? "1px" : "2px"}
          borderColor={formState.selectError === null ? "inherit" : "red"}
          borderRadius="lg"
          bg="white"
        >
          <RadioGroup name="issue-parents" py={3} onChange={onClick} value={formState.checkedRadio}>
            <VStack align="stretch">
              {formState.choices.map((choice) => (
                <ChoiceItem key={choice.id} choice={choice} />
              ))}
            </VStack>
          </RadioGroup>
        </Box>
      </Skeleton>
      <FormErrorMessage>{formState.selectError}</FormErrorMessage>
    </FormControl>
  );
};

interface ReportButtonProps extends ButtonProps {
  target: {
    name: string;
    recipient_slug: ReportRecipient;
    identifier: number | string;
  };
  isReported: boolean;
  onModalClose: () => void;
  fetchURL: string;
  postURL: string;
  userIsAuthenticated?: boolean;
  onUnauthenticatedUser?: () => void;
}

export const ReportButton = ({
  target,
  isReported,
  onModalClose,
  fetchURL,
  postURL,
  onUnauthenticatedUser = undefined,
  userIsAuthenticated = false,
}: ReportButtonProps) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [formState, setFormState] = useState<FormDataType>(initialFormState);
  const [fetchedIssuesType, setFetchedIssuesType] = useState<string>(null);

  const updateReportIssues = async () => {
    if (fetchedIssuesType === target.recipient_slug) return;
    await fetchReportIssues(target.recipient_slug, fetchURL).then((response) =>
      setFormState({ ...formState, choices: response }),
    );
    setFetchedIssuesType(target.recipient_slug);
  };

  const closeModalAndReload = () => {
    setFetchedIssuesType(null);
    onModalClose();
  };

  const onSubmit = () => {
    const exitWithErr = (message) => setFormState({ ...formState, selectError: message });
    if (formState.checkedRadio === null) {
      exitWithErr("حداقل  باید یکی از مشکلات انتخاب شود!");
      return;
    }
    if (
      formState.checkedIssues.length === 0 &&
      formState.choices.filter((c) => c.id.toString() === formState.checkedRadio)[0].children.length > 0
    ) {
      exitWithErr("لطفاً یکی از زیرمجموعه‌ها را انتخاب کنید.");
      return;
    }
    setIsLoading(true);
    reportAction(
      target.recipient_slug,
      target.identifier,
      formState.checkedIssues.length === 0 ? [formState.checkedRadio] : formState.checkedIssues,
      formState.description,
      postURL,
    )
      .then((resp) => {
        if (resp.status === 201) {
          toast({
            title: "موفقیت‌آمیز بود",
            description: "گزارش شما با موفقیت ثبت شد.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          closeModalAndReload();
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast({
            title: "خطایی رخ داد!",
            description: err.response.data.non_field_errors[0],
            status: "error",
            duration: 10000,
            isClosable: true,
          });
        } else if (err.response.status === 429) {
          toast({
            title: "خطایی رخ داده!",
            description: err.response.data.detail,
            status: "error",
            duration: 10000,
            isClosable: true,
          });
        } else {
          toast({
            title: "خطایی رخ داد!",
            description: "لطفا به پشتیبانی کوئرا گزارش دهید.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
        setFormState(initialFormState);
        onClose();
      });
  };

  return (
    <>
      <Button
        mt={4}
        fontSize="sm"
        variant="ghost"
        leftIcon={<MdIcon icon={mdiFlag} />}
        colorScheme="gray"
        onClick={() => {
          if (onUnauthenticatedUser && !userIsAuthenticated) onUnauthenticatedUser();
          else {
            updateReportIssues();
            onOpen();
          }
        }}
        isDisabled={isReported}
      >
        {isReported
          ? `${RECIPIENT_TO_LABEL[target.recipient_slug]} گزارش شده است.`
          : `گزارش اشکال ${RECIPIENT_TO_LABEL[target.recipient_slug]}`}
      </Button>
      <Modal isOpen={isOpen} size={["full", "2xl"]} onClose={onClose} closeOnOverlayClick>
        <ModalOverlay />
        <ModalContent my={[0, 16]} maxH={["100%", "unset"]} overflowY="auto">
          <ModalHeader borderBottom="1px" borderColor="inherit">{`گزارش اشکال ${
            RECIPIENT_TO_LABEL[target.recipient_slug]
          } "${target.name}"`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="gray.50" p={6}>
            {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
            <FormContext.Provider value={{ formState, setFormState }}>
              <VStack align="stretch" spacing={6}>
                <ChoiceList isLoaded={fetchedIssuesType !== null} />
                <FormControl>
                  <FormLabel>توضیحات بیشتر</FormLabel>
                  <Textarea
                    placeholder="توضیحات بیشتری در مورد مشکل را بنویسید."
                    value={formState.description}
                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    colorScheme="brand"
                  />
                </FormControl>
              </VStack>
            </FormContext.Provider>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" colorScheme="gray" onClick={onClose}>
              انصراف
            </Button>
            {formState.choices.length > 0 && (
              <Button ms={3} onClick={onSubmit} isLoading={isLoading}>
                تایید
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
