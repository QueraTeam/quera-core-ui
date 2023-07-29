import { HStack, Link, Progress, Spacer, VStack } from "@chakra-ui/react";
import { persianDigits } from "src/utils/string";
import { useSSRBreakpointValue } from "src/hooks/useSSRBreakpointValue";
import NextImage from "next/image";

export interface UserQCVProgressProps {
  name: string;
  avatar: string;
  progress: number;
}

export const UserQCVProgress = ({
  name,
  avatar,
  progress,
}: UserQCVProgressProps) => {
  const isMobile = useSSRBreakpointValue([true, false]);

  return (
    <HStack spacing={4} width="full">
      <NextImage
        alt={name}
        src={avatar}
        width="45px"
        height="45px"
        unoptimized
      />
      <VStack flex={1} align="stretch">
        <HStack spacing={4}>
          {!isMobile && <span>{name}</span>}
          <span title="درصد تکمیل">{persianDigits(progress)}٪ پیشرفت</span>
          <Spacer />
          <Link color="text.brand" href="/" target="_blank" rel="noreferrer">
            مشاهده
          </Link>
          <Link color="text.brand" href="/" target="_blank" rel="noreferrer">
            تکمیل
          </Link>
        </HStack>
        <Progress
          colorScheme="green"
          size="sm"
          borderRadius="md"
          value={progress}
        />
      </VStack>
    </HStack>
  );
};
