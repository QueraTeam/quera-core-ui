import * as React from "react";

import { Card, CardBody } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { FaqAccordion, FaqAccordionProps } from "./FaqAccordion";

const meta: Meta<typeof FaqAccordion> = {
  component: FaqAccordion,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  decorators: [
    (Story) => (
      <Card>
        <CardBody>
          <Story />
        </CardBody>
      </Card>
    ),
  ],
};

type Story = StoryObj<typeof FaqAccordion>;

const SampleFAQItems: FaqAccordionProps["faqItems"] = [
  {
    id: 1,
    question: "سوال 1",
    answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
	 چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
	و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف,`,
  },
  {
    id: 2,
    question: "سوال 2",
    answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
	 چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
	و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف,`,
  },
  {
    id: 3,
    question: "سوال 3",
    answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
	 چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
	و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف,`,
  },
  {
    id: 4,
    question: "سوال 4",
    answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
	 چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
	و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف,`,
  },
  {
    id: 5,
    question: "سوال 5",
    answer: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
	 چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
	و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف,`,
  },
];

export const Primary: Story = {
  args: { faqItems: SampleFAQItems, fluid: true, htmlSupport: false },
};

export default meta;
