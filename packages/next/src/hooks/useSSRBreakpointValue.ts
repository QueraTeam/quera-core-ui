import { useBreakpointValue } from "@chakra-ui/react";

type useSSRBreakpointValueOptions = { ssr?: boolean };

export const useSSRBreakpointValue = <T>(
  values: T[],
  { ssr = false }: useSSRBreakpointValueOptions = {}
): T => useBreakpointValue(values, { ssr });
