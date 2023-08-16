import * as React from "react";
import { HStack, Link, Progress, Spacer, VStack } from "@chakra-ui/react";
import { persianDigits } from "src/utils/string";

export interface UserQCVProgressProps {
  name: string;
  avatar: string;
  progress: number;
  isMobile: boolean;
}

export const UserQCVProgress = ({ name, avatar, progress, isMobile }: UserQCVProgressProps) => (
  <HStack spacing={4} width="full">
    <img alt={name} src={avatar} width="45px" height="45px" />
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
      <Progress colorScheme="green" size="sm" borderRadius="md" value={progress} />
    </VStack>
  </HStack>
);
