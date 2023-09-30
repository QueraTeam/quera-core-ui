import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex, Card } from "@chakra-ui/react";
import { ReportButton, ReportRecipient, initialFormState } from "./ReportButton";
import { SignInModalProvider, useSignInModal } from "./SignInModalProvider";

const mockReportIssues = [
  {
    id: 1,
    text: "اطلاعات غیرواقعی",
    children: [
      {
        id: 8,
        text: "سوابق کاری",
        children: [],
        is_selectable: true,
      },
      {
        id: 9,
        text: "سوابق تحصیلی",
        children: [],
        is_selectable: true,
      },
      {
        id: 10,
        text: "پروژه‌های انجام شده",
        children: [],
        is_selectable: true,
      },
      {
        id: 11,
        text: "اطلاعات تماس",
        children: [],
        is_selectable: true,
      },
      {
        id: 12,
        text: "لینک‌ها",
        children: [],
        is_selectable: true,
      },
    ],
    is_selectable: false,
  },
  {
    id: 2,
    text: "اطلاعات‌ تماس",
    children: [],
    is_selectable: true,
  },
  {
    id: 3,
    text: "محتوای متنی پروفایل",
    children: [],
    is_selectable: true,
  },
  {
    id: 4,
    text: "محتوای تصویری پروفایل",
    children: [],
    is_selectable: true,
  },
  {
    id: 5,
    text: "به روز نبودن",
    children: [
      {
        id: 13,
        text: "سوابق کاری",
        children: [],
        is_selectable: true,
      },
      {
        id: 14,
        text: "سوابق تحصیلی",
        children: [],
        is_selectable: true,
      },
      {
        id: 15,
        text: "وضعیت اشتغال",
        children: [],
        is_selectable: true,
      },
    ],
    is_selectable: false,
  },
  {
    id: 6,
    text: "کلاهبرداری، نقض قانون و یا مالکیت معنوی",
    children: [],
    is_selectable: true,
  },
];

const meta: Meta<typeof ReportButton> = {
  component: ReportButton,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
    actions: { argTypesRegex: "^on.*" },
  },
  args: {
    target: { name: "مشق باقر", recipient_slug: ReportRecipient.Problem, identifier: "12" },
    isReported: false,
    isFetching: false,
    isSubmitting: false,
    onSubmit: () => console.log("submitted"),
    onClose: () => null,
    onButtonClick: () => null,
    isOpen: false,
    formState: { ...initialFormState, choices: mockReportIssues },
    setFormState: null,
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  decorators: [
    (Story) => (
      <Flex h="100vh" w="full" alignItems="center" justifyContent="center">
        <Card px={7} py={6}>
          <SignInModalProvider>
            <Story />
          </SignInModalProvider>
        </Card>
      </Flex>
    ),
  ],
};

type Story = StoryObj<typeof ReportButton>;

export const Button: Story = {
  args: {},
};

export const LoggedOutButton: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { open } = useSignInModal();
    return <ReportButton {...args} onButtonClick={open} />;
  },
};

export const FetchingModal: Story = {
  args: {
    isOpen: true,
    isFetching: true,
  },
};

export const DoneFetchingModal: Story = {
  args: {
    isOpen: true,
    isFetching: false,
  },
};

export const AfterReportButton: Story = {
  args: {
    isReported: true,
  },
};

export default meta;
