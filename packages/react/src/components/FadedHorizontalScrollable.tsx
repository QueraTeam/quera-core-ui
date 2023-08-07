import { Box, BoxProps, Flex, IconButton } from "@chakra-ui/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import * as React from "react";
import { useScrollOnDrag } from "../hooks/useScrollOnDrag";
import { FadedHorizontalOneLine } from "./Faded";
import { MdIcon } from "./MdIcon";

export interface FadedHorizontalScrollableProps extends BoxProps {
  children: React.ReactNode;
  navigation?: boolean;
}

export const FadedHorizontalScrollable = ({ children, navigation, ...rest }: FadedHorizontalScrollableProps) => {
  const { ref, onMouseDown, scroll } = useScrollOnDrag();

  return (
    <Box
      {...rest}
      sx={{
        "> div::-webkit-scrollbar": {
          display: "none",
        },
        "> div": {
          scrollbarWidth: "none",
        },
      }}
    >
      {navigation && (
        <Box>
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            color="black"
            aria-label="Navigate Next"
            icon={<MdIcon icon={mdiChevronRight} boxSize={6} />}
            pos="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex="docked"
            onClick={() => scroll({ dx: 50, dy: 0, behavior: "smooth" })}
          />
          <IconButton
            variant="unstyled"
            colorScheme="blackAlpha"
            color="black"
            aria-label="Navigate Perv"
            icon={<MdIcon icon={mdiChevronLeft} boxSize={6} />}
            pos="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex="docked"
            onClick={() => scroll({ dx: -50, dy: 0, behavior: "smooth" })}
          />
        </Box>
      )}
      <Flex
        as={FadedHorizontalOneLine}
        percent={90}
        overflowX="scroll"
        userSelect="none"
        cursor="grab"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {children}
      </Flex>
    </Box>
  );
};
