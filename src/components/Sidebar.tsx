import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const SidebarRow = ({ children }: { children: ReactNode }) => (
  <Flex justify="space-between" flexFlow="row wrap">
    {children}
  </Flex>
);

export const SidebarLabel = ({ children }: { children: ReactNode }) => (
  <Box lineHeight={2} me={3} fontWeight="semibold">
    {children}
  </Box>
);

export const SidebarValue = ({ children }: { children: ReactNode }) => (
  <Box lineHeight={2} color="text.pale">
    {children}
  </Box>
);
