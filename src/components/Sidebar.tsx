import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";

export const SidebarRow = ({ children }: { children: React.ReactNode }) => (
  <Flex justify="space-between" flexFlow="row wrap">
    {children}
  </Flex>
);

export const SidebarLabel = ({ children }: { children: React.ReactNode }) => (
  <Box lineHeight={2} me={3} fontWeight="semibold">
    {children}
  </Box>
);

export const SidebarValue = ({ children }: { children: React.ReactNode }) => (
  <Box lineHeight={2} color="text.pale">
    {children}
  </Box>
);
