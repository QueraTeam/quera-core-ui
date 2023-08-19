import * as React from "react";

import { Meta, StoryObj } from "@storybook/react";
import { Button, Card, CardBody, HStack } from "@chakra-ui/react";
import { SignInModalProvider, useSignInModal } from "./SignInModalProvider";

const meta: Meta<typeof SignInModalProvider> = {
  title: "Components/SignIn Modal",
  component: SignInModalProvider,
  decorators: [
    (Story) => (
      <SignInModalProvider>
        <Story />
      </SignInModalProvider>
    ),
  ],
};

const SignInModalWrapper = () => {
  const signInModal = useSignInModal();

  return (
    <Card>
      <CardBody>
        <HStack spacing={6} align="center" justify="center" minH={150}>
          <Button onClick={() => signInModal.open()}>نمایش مودال ثبت‌نام</Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export const Primary: StoryObj<typeof SignInModalProvider> = {
  render: () => <SignInModalWrapper />,
};

export default meta;
