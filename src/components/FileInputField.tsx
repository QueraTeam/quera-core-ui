import * as React from "react";
import { Button, HStack, Input, Spacer, Text, Link, Box, Tooltip } from "@chakra-ui/react";
import { mdiAttachment, mdiFileEyeOutline } from "@mdi/js";
import { ControllerRenderProps } from "react-hook-form";
import { truncateFilename } from "src/utils/string";
import { MdIcon } from "./MdIcon";

export interface FileInputFieldType {
  name: string;
  size: number;
  url: string;
}

interface FileInputFieldProps<T> {
  setUploadMode: React.Dispatch<React.SetStateAction<boolean>>;
  previousFile: FileInputFieldType;
  field: ControllerRenderProps<T, any>;
  showFileSize: boolean;
}

export const FileInputField = <T,>({ previousFile, field, setUploadMode, showFileSize }: FileInputFieldProps<T>) => {
  const [file, setFile] = React.useState<FileInputFieldType>({
    size: previousFile.size,
    name: previousFile.name,
    url: previousFile.url,
  });
  const inputRef = React.useRef<HTMLInputElement>(null);

  const fileSize =
    file.size < 1024 * 1024
      ? `${(file.size / 1024).toLocaleString("fa-IR", {
          maximumFractionDigits: 1,
        })} کیلوبایت`
      : `${(file.size / (1024 * 1024)).toLocaleString("fa-IR", {
          maximumFractionDigits: 1,
        })} مگابایت`;

  return (
    <HStack pos="relative">
      <Input
        type="file"
        accept="application/pdf"
        height="initial"
        p={1}
        w="64"
        name={field.name}
        onBlur={field.onBlur}
        ref={(el) => {
          field.ref(el);
          inputRef.current = el;
        }}
        onChange={(event) => {
          const inputFile = event.target.files[0];
          setFile({
            size: inputFile ? inputFile.size : 0,
            name: inputFile ? inputFile.name : "",
            url: null,
          });
          field.onChange(inputFile);
        }}
        display="none"
      />
      <Input as={Box} fontSize="sm" display="flex" alignItems="center" flex={1} overflowX="hidden">
        <HStack justify="space-between" w="full">
          <HStack>
            <MdIcon icon={mdiAttachment} boxSize={5} me={2} />
            <Text dir="ltr" title={file.name} whiteSpace="nowrap">
              {truncateFilename(file.name, 20)}
            </Text>
          </HStack>

          <HStack spacing={0}>
            {file.url && (
              <Link href={file.url} target="_blank">
                <Tooltip label="مشاهده فایل رزومه">
                  <MdIcon icon={mdiFileEyeOutline} boxSize={5} me={2} />
                </Tooltip>
              </Link>
            )}
            {showFileSize && (
              <>
                <Spacer />
                <Text color="text.pale.extra">{fileSize}</Text>
              </>
            )}
          </HStack>
        </HStack>
      </Input>
      <Button
        fontSize="sm"
        tabIndex={0}
        variant="outline"
        onClick={() => {
          setUploadMode(true);
          setFile({ size: 0, name: "", url: null });
          inputRef.current?.click();
        }}
      >
        آپلود فایل
      </Button>
    </HStack>
  );
};
