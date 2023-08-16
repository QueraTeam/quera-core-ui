import * as React from "react";
import { mdiGithub, mdiLinkedin, mdiGoogle } from "@mdi/js";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdIcon } from "./MdIcon";

type SignInModal = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const SignInModalDisclosureContext = React.createContext<SignInModal>({
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const useSignInModal = () => React.useContext(SignInModalDisclosureContext);

const SocialLoginButton = ({ name, icon, colorScheme }: { name: string; icon: string; colorScheme: string }) => (
  <form>
    <Button
      type="submit"
      colorScheme={colorScheme}
      variant="outline"
      leftIcon={<MdIcon boxSize={6} icon={icon} />}
      w="100%"
    >
      ورود/عضویت با {name}
    </Button>
  </form>
);

export const SignInModalProvider = ({ children }: { children: React.ReactNode }) => {
  const disclosure = useDisclosure();
  const githubColorScheme = useColorModeValue("blackAlpha", "white");

  return (
    <SignInModalDisclosureContext.Provider
      value={{
        open: disclosure.onOpen,
        close: disclosure.onClose,
        toggle: disclosure.onToggle,
      }}
    >
      {children}
      {disclosure.isOpen && (
        <Modal isCentered size="md" isOpen onClose={disclosure.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody p={6}>
              لطفاً ابتدا وارد حساب کاربری خود شوید.
              <VStack align="stretch" mt={4}>
                <Button as="a">ورود/عضویت با ایمیل و گذرواژه</Button>
                <SocialLoginButton name="گوگل" icon={mdiGoogle} colorScheme="red" />
                <SocialLoginButton name="گیت‌هاب" icon={mdiGithub} colorScheme={githubColorScheme} />
                <SocialLoginButton name="لینکداین" icon={mdiLinkedin} colorScheme="linkedin" />
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </SignInModalDisclosureContext.Provider>
  );
};
