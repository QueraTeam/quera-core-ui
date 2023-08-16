import * as React from "react";

import { Meta } from "@storybook/react";
import { Button, Card, CardBody, HStack } from "@chakra-ui/react";
import { SignInModalProvider, useSignInModal } from "@querateam/qui-react";

export default {
  title: "Foundation/SignIn Modal",
  component: SignInModalProvider,
  decorators: [
    (Story) => (
      <SignInModalProvider>
        <Story />
      </SignInModalProvider>
    ),
  ],
} as Meta;

export const Base = () => {
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
