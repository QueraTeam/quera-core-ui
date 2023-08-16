import * as React from "react";
import { Icon, IconProps, forwardRef } from "@chakra-ui/react";

export interface MdIconProps extends IconProps {
  icon: string;
  css?: any;
}
export const MdIcon = forwardRef<MdIconProps, "svg">(({ icon, ...props }, ref) => (
  <Icon
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    ref={ref}
    {...props}
  >
    <path d={icon} />
  </Icon>
));
