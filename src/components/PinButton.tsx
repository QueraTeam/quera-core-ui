import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Button,
  ButtonProps,
  HStack,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { mdiBookmark, mdiBookmarkOutline } from "@mdi/js";
import { MdIcon } from "./MdIcon";

export interface PinProps extends ButtonProps {
  identity: number | string;
  pinned: boolean;
  controlled?: boolean;
  hintType?: "tooltip" | "text";
  onPin?: Dispatch<SetStateAction<boolean>>;
}

interface PinButtonProps extends PinProps {}
export const PinButton = ({
  pinned,
  controlled = false,
  hintType = "tooltip",
  ...buttonProps
}: PinButtonProps) => {
  const [isPinning] = useState(false);
  const [_isPinned, setIsPinned] = useState(pinned);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setIsPinned(pinned);
  }, [pinned]);

  const isPinned = controlled ? pinned : _isPinned;

  const hint = isPinned ? "حذف نشان" : "نشان کردن";
  const icon = isPinned ? (
    <MdIcon icon={mdiBookmark} boxSize={6} />
  ) : (
    <MdIcon icon={mdiBookmarkOutline} boxSize={6} />
  );

  const button = (
    <Button
      aria-label={hint}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        setIsHover(false);
        setIsPinned(!isPinned);
      }}
      {...buttonProps}
    >
      <HStack justify="center">
        {isPinning ? <Spinner /> : icon}
        {hintType === "text" && <Text fontSize={12}>{hint}</Text>}
      </HStack>
    </Button>
  );

  if (hintType === "tooltip")
    return (
      <Tooltip isOpen={isHover} label={hint}>
        {button}
      </Tooltip>
    );
  return button;
};
