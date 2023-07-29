import {
  Alert,
  AlertIcon,
  Box,
  BoxProps,
  FormControl,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { persianDigits } from "../utils/string";
import { FileInputField, FileInputFieldType } from "./FileInputField";
import { UserQCVProgress } from "./UserQCVProgress";

type UploadResumeType = {
  UPLOAD: string;
  QCV: string;
};

type UploadResumeUserProfileType = {
  avatar: string;
  fullName: string;
  progressPercent: number;
};

export interface UploadResumeProps<TFieldValues extends FieldValues>
  extends BoxProps {
  resumeTypes: UploadResumeType;
  field: Path<TFieldValues>;
  control: Control<any>;
  previousFile: Omit<FileInputFieldType, "url">;
  userProfile: UploadResumeUserProfileType;
  minProgressPercent: number;
}

export const UploadResume = <T,>({
  field,
  control,
  previousFile,
  userProfile,
  minProgressPercent,
  resumeTypes,
  ...rest
}: UploadResumeProps<T>) => {
  const previousFileExists =
    previousFile && previousFile.name && previousFile.size;
  const [uploadMode, setUploadMode] = useState<boolean>(!previousFileExists);

  return (
    <Controller
      name="resume_type"
      control={control}
      defaultValue={resumeTypes.UPLOAD}
      render={({ field: resumeTypeField }) => (
        <RadioGroup
          {...resumeTypeField}
          {...rest}
          defaultValue={resumeTypes.UPLOAD}
        >
          <VStack spacing={6}>
            <VStack align="flex-start" width="full">
              <Radio value={resumeTypes.UPLOAD}>ارسال فایل رزومه</Radio>
              <Controller
                name={field}
                control={control}
                rules={{
                  required:
                    resumeTypeField.value === resumeTypes.UPLOAD && uploadMode,
                }}
                render={({ field: fileInputField, fieldState }) => (
                  <FormControl
                    isInvalid={!!fieldState.error}
                    opacity={
                      resumeTypeField.value === resumeTypes.UPLOAD ? 1 : 0.3
                    }
                    pointerEvents={
                      resumeTypeField.value === resumeTypes.UPLOAD
                        ? "auto"
                        : "none"
                    }
                  >
                    <FileInputField
                      setUploadMode={setUploadMode}
                      previousFile={{
                        name: previousFile.name,
                        size: previousFile.size,
                        url: "",
                      }}
                      field={fileInputField}
                    />
                    {fieldState.error && (
                      <FormErrorMessage>
                        {fieldState.error.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              />
            </VStack>
            <VStack align="flex-start" width="full">
              <Radio value={resumeTypes.QCV}>ارسال رزومه کوئرایی</Radio>
              <Box
                w="full"
                pointerEvents={
                  resumeTypeField.value === resumeTypes.QCV ? "auto" : "none"
                }
                opacity={resumeTypeField.value === resumeTypes.QCV ? 1 : 0.3}
              >
                <UserQCVProgress
                  name={userProfile.fullName}
                  avatar={userProfile.avatar}
                  progress={userProfile.progressPercent}
                />
                {userProfile.progressPercent < minProgressPercent && (
                  <Alert status="error" rounded="lg" mt={2}>
                    <AlertIcon />
                    <Text>
                      حداقل
                      <Text as="strong" fontWeight="extrabold">
                        &nbsp;{persianDigits(minProgressPercent)}٪&nbsp;
                      </Text>
                      رزومه خود را تکمیل کنید.
                    </Text>
                  </Alert>
                )}
              </Box>
            </VStack>
          </VStack>
        </RadioGroup>
      )}
    />
  );
};
