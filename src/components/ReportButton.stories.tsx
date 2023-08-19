import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex, Card } from "@chakra-ui/react";
import { ReportButton, ReportRecipient } from "./ReportButton";
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
    mt: 0,
    target: { name: "مشق باقر", recipient_slug: ReportRecipient.Problem, identifier: "12" },
    isReported: false,
    userIsAuthenticated: false,
    isFetching: false,
    reportIssues: mockReportIssues,
    isSubmitting: false,
    modalDisclosure: { isOpen: false, onOpen: () => null, onClose: () => null },
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  decorators: [
    (Story) => (
      <Flex h="100vh" w="full" alignItems="center" justifyContent="center">
        <Card p={7}>
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
  args: {
    userIsAuthenticated: true,
  },
};

export const LoggedOutButton: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { open } = useSignInModal();
    return <ReportButton {...args} onUnauthenticatedUser={open} />;
  },
};

export const FetchingModal: Story = {
  args: {
    modalDisclosure: { isOpen: true, onOpen: () => null, onClose: () => null },
    isFetching: true,
  },
};

export const DoneFetchingModal: Story = {
  args: {
    modalDisclosure: { isOpen: true, onOpen: () => null, onClose: () => null },
    isFetching: false,
  },
};

export const AfterReportButton: Story = {
  args: {
    isReported: true,
  },
};

export default meta;
