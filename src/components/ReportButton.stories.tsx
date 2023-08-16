import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack, Button } from "@chakra-ui/react";
import { persianDigits, ReportButton, ReportRecipient } from ;

export default {
  title: "ReportButton",
  component: ReportButton,
} as ComponentMeta<typeof ReportButton>;

const Template: ComponentStory<typeof ReportButton> = (args) => (
  <HStack wrap="wrap" alignItems="center" spacing={6} align="start">
    <ReportButton
      target={ReportRecipient.Problem}
      isReported={false}
      onModalClose={() => console.log("closed")}
      fetchURL={"/"}
      postURL={"/"}
    />
  </HStack>
);

export const Base = Template.bind({});
