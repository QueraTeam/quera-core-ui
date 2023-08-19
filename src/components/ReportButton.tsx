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
  UseDisclosureReturn,
  Radio,
  RadioGroup,
  VStack,
  FormErrorMessage,
  FormControl,
  FormLabel,
  FormHelperText,
  Skeleton,
} from "@chakra-ui/react";
import { useState, createContext, useContext, Dispatch, SetStateAction, useEffect } from "react";
import { mdiFlag } from "@mdi/js";
import { MdIcon } from "./MdIcon";

export type ReportIssuesType = {
  id: number;
  text: string;
  children: ReportIssuesType[];
  is_selectable: boolean;
};

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

const ChoiceList = ({ isLoading }: { isLoading: boolean }) => {
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
      <Skeleton isLoaded={!isLoading}>
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
  modalDisclosure: Pick<UseDisclosureReturn, "isOpen" | "onOpen" | "onClose">;
  isReported: boolean;
  isFetching: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
  reportIssues: ReportIssuesType[];
  userIsAuthenticated?: boolean;
  onUnauthenticatedUser?: () => void;
  mt?: number;
}

export const ReportButton = ({
  target,
  isReported,
  isFetching,
  isSubmitting,
  onSubmit,
  modalDisclosure,
  reportIssues,
  onUnauthenticatedUser = () => null,
  userIsAuthenticated = false,
  mt = 4,
}: ReportButtonProps) => {
  const [formState, setFormState] = useState<FormDataType>({ ...initialFormState, choices: reportIssues });
  const { isOpen, onClose, onOpen } = modalDisclosure;

  return (
    <>
      <Button
        mt={mt}
        fontSize="sm"
        variant="ghost"
        leftIcon={<MdIcon icon={mdiFlag} />}
        colorScheme="gray"
        onClick={() => {
          if (!userIsAuthenticated) onUnauthenticatedUser();
          else {
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
        <ModalContent my={[0, 16]} maxH={["100%", "unset"]} overflowY="auto" dir="rtl">
          <ModalHeader borderBottom="1px" borderColor="inherit">{`گزارش اشکال ${
            RECIPIENT_TO_LABEL[target.recipient_slug]
          } "${target.name}"`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="gray.50" p={6}>
            {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
            <FormContext.Provider value={{ formState, setFormState }}>
              <VStack align="stretch" spacing={6}>
                <ChoiceList isLoading={isFetching} />
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
              <Button ms={3} onClick={onSubmit} isLoading={isSubmitting}>
                تایید
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
