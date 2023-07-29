import Head from "next/head";
import { jsonLdScriptProps } from "react-schemaorg";
import { FAQPage } from "schema-dts";

import {
  VStack,
  Text,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Divider,
  Box,
} from "@chakra-ui/react";

import { Card, CardProps } from "../components/Card";

export interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
}

export interface FaqAccordionProps extends CardProps {
  faqItems: FaqItem[];
  fluid?: boolean;
  htmlSupport?: boolean;
}

/**
 * Hint: Don't hide this component in the view, even with styles.
 */
export const FaqAccordion = ({
  faqItems,
  fluid = false,
  htmlSupport = false,
  ...rest
}: FaqAccordionProps) => {
  const selectedColor = useColorModeValue("brand.700", "brand.400");
  return (
    <>
      {
        <Head>
          {/* https://github.com/emotion-js/emotion/issues/1800 */}
          {/* @ts-ignore */}
          <script
            {...jsonLdScriptProps<FAQPage>({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            })}
          />
        </Head>
      }
      <Accordion allowToggle w={fluid && "full"}>
        <VStack
          as={Card}
          align="stretch"
          spacing={0}
          divider={<Divider />}
          {...rest}
        >
          {faqItems.map((faqItem) => (
            <AccordionItem
              border="none"
              key={faqItem.id}
              px={1}
              _before={{ bgColor: "gray.700 !important" }}
            >
              <h3>
                <AccordionButton
                  _expanded={{ color: selectedColor }}
                  py={3}
                  _hover={{ bg: "initial" }}
                >
                  <HStack spacing={4} flex={1}>
                    <Text flex={1} textAlign="right" fontWeight="medium">
                      {faqItem.question}
                    </Text>
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
              </h3>
              <AccordionPanel pt={0}>
                {!htmlSupport ? (
                  <Text color="text.pale">{faqItem.answer}</Text>
                ) : (
                  <Box dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </VStack>
      </Accordion>
    </>
  );
};
