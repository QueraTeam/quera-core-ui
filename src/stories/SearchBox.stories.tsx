import * as React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProblemIcon, SearchBox, persianDigits } from "@querateam/qui-react";
import { rest } from "msw";

export default {
  title: "Components/SearchBox",
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const renderResultItem = (result) => (
  <Button
    key={result.pk}
    as="a"
    href={result.url}
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

const GET_PROBLEMS_ENDPOINTS = "/quera-core-ui/problems";

export const Base: ComponentStory<typeof SearchBox> = () => {
  const searchHandler = () =>
    fetch(GET_PROBLEMS_ENDPOINTS)
      .then((res) => res.json())
      .then((data) => data.problems);

  const [value, setValue] = React.useState("");
  const onShowAllResults = () => {
    // router.push({
    //   pathname: "/problems",
    //   query: { search: value },
    // });
    console.log("show all results");
  };
  const onClearSearch = () => {
    console.log("clear search");
  };

  return (
    <SearchBox
      placeholder="جستجوی نام یا شماره سؤال..."
      emptyMessage="سوالی یافت نشد"
      renderResultItem={renderResultItem}
      searchHandler={searchHandler}
      onClearSearch={onClearSearch}
      onShowAllResults={onShowAllResults}
      searchQueryValue={value}
    />
  );
};

const problems: {
  pk: number;
  url: string;
  solved_percent: number;
  name: string;
  solved_count: number;
}[] = [
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
];

Base.parameters = {
  msw: {
    handlers: [
      rest.get(GET_PROBLEMS_ENDPOINTS, (req, res, ctx) =>
        res(
          ctx.json({
            problems,
          }),
        ),
      ),
    ],
  },
};
