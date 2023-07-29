import { Tag } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

type GrayTagProps = {
  children: ReactNode;
  title?: string;
  isBold?: boolean;
  isLink?: boolean;
  dir?: "ltr" | "rtl" | "auto";
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

export const GrayTag = ({ children, title, isBold, isLink, onClick, dir = "ltr" }: GrayTagProps) => (
  <Tag
    colorScheme="gray"
    cursor={isLink && "cursor"}
    title={isBold ? title : undefined}
    fontWeight={isBold ? "extrabold" : "medium"}
    border={isBold && "1px"}
    borderColor="gray.300"
    flexShrink={0}
    fontSize="0.875em"
    lineHeight="2em"
    padding="0 0.7em"
    borderRadius="md"
    color="text.pale"
    onClick={onClick}
  >
    {/* putting dir on outer tag caused margin problems */}
    <span dir={dir}>{children}</span>
  </Tag>
);
