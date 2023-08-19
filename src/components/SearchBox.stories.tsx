import * as React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { StoryObj, Meta } from "@storybook/react";
import { ProblemIcon } from "./ProblemIcon";
import { SearchBox, SearchBoxProps } from "./SearchBox";
import { persianDigits } from "../utils/string";

const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
  parameters: {
    controls: {
      exclude: /renderResultItem|searchHandler|setValue|value|emptyImage/g,
    },
  },
};

const searchResults = {
  problems: [
    {
      pk: 1,
      url: "",
      solved_percent: 43,
      name: "لورم ایپسوم متن ساختگی با تولید سادگی",
      solved_count: 134,
    },
    {
      pk: 2,
      url: "",
      solved_percent: 55,
      name: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از",
      solved_count: 321,
    },
    {
      pk: 3,
      url: "",
      solved_percent: 100,
      name: "لورم ایپسوم متن ساختگی",
      solved_count: 423,
    },
    {
      pk: 4,
      url: "",
      solved_percent: 12,
      name: "لورم ایپسوم متن ساختگی با تولید سادگی",
      solved_count: 10,
    },
  ],
};

const renderResultItem = (result) => (
  <Button
    key={result.pk}
    as="a"
    variant="ghost"
    colorScheme="gray"
    borderRadius={0}
    justifyContent="start"
    fontWeight="normal"
    leftIcon={<ProblemIcon solvedPercent={result.solved_percent} />}
    px={4}
    overflowX="hidden"
  >
    <HStack flexGrow={1} spacing={4} align="stretch" alignItems="center" minW={0} justify="space-between">
      <Text as="span" textOverflow="ellipsis" overflow="hidden">
        {result.name}
      </Text>
      <Text as="span" color="text.pale.extra" fontSize="sm">
        {persianDigits(result.solved_count)} حل
      </Text>
    </HStack>
  </Button>
);

const CompleteSearchBox = (props: SearchBoxProps) => {
  const searchHandler = async () => searchResults.problems;

  const [value, setValue] = React.useState("");

  return (
    <SearchBox
      placeholder="جستجوی نام یا شماره سؤال..."
      emptyMessage="سوالی یافت نشد"
      renderResultItem={renderResultItem}
      searchHandler={searchHandler}
      setValue={setValue}
      value={value}
      emptyImage={<img src="/images/empty.png" alt="Not found" width={300} height={256} />}
      {...props}
    />
  );
};

export const Primary: StoryObj<typeof SearchBox> = {
  render: (args) => <CompleteSearchBox {...args} />,
  argTypes: { onClearSearch: { action: "cleared" }, onShowAllResults: { action: "show all results" } },
};

export default meta;
