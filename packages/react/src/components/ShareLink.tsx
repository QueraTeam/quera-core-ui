import * as React from "react";
import { Tooltip, Button, useClipboard, ButtonProps } from "@chakra-ui/react";
import { mdiShareVariantOutline } from "@mdi/js";

import { MdIcon } from "./MdIcon";

interface ShareLinkProps extends ButtonProps {
  helpText: string;
  successText: string;
  url: string;
}
export const ShareLink = ({ helpText, successText, url, ...buttonProps }: ShareLinkProps) => {
  const { hasCopied, onCopy } = useClipboard(url);
  const [isHover, setIsHover] = React.useState(false);

  return (
    <Tooltip label={hasCopied ? successText : helpText} isOpen={isHover || hasCopied}>
      <Button
        aria-label={helpText}
        variant="unstyled"
        {...buttonProps}
        onClick={onCopy}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <MdIcon icon={mdiShareVariantOutline} boxSize={6} />
      </Button>
    </Tooltip>
  );
};
