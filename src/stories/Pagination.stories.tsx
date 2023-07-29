import { ComponentMeta, ComponentStory } from "@storybook/react";

import { persianDigits } from "src/utils/string";
import { Pagination } from "src/components/Pagination";
import { Card, CardBody } from "@chakra-ui/react";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    controls: {
      include: [
        "page",
        "total",
        "pageSize",
        "onPageChange",
        "siblingRange",
        "beginRange",
        "endRange",
        "renderNumber",
      ],
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Card>
    <CardBody>
      <Pagination {...args} />
    </CardBody>
  </Card>
);

export const Base = Template.bind({});
Base.args = {
  total: 467,
  pageSize: 15,
  page: 12,
  renderNumber: (num: string | number) => persianDigits(num),
};
