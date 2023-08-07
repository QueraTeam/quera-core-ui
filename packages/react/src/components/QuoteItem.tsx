import * as React from "react";
import { HStack, VStack, Text, Heading, Box } from "@chakra-ui/react";
import { UserAvatar } from "./UserAvatar";

export interface QuoteItemProps {
  image: string;
  narrator_name: string;
  narrator_role: string;
  quote: string;
}

export const QuoteItem = ({ quote }: { quote: QuoteItemProps }) => (
  <Box>
    <VStack align="stretch" spacing={4} px={[0, null, 6]} py={[2, null, 4]}>
      <HStack spacing={4} align="start">
        <UserAvatar src={quote.image} name={quote.narrator_name} />
        <VStack spacing={0} align="start">
          <Heading as="h2" size="md" lineHeight="tall">
            {quote.narrator_name}
          </Heading>
          <Text color="text.pale">{quote.narrator_role}</Text>
        </VStack>
      </HStack>
      <Text whiteSpace="pre-wrap">{quote.quote}</Text>
    </VStack>
  </Box>
);
