import * as React from "react";
import NextLink from "next/link";
import { Link, LinkProps, Text } from "@chakra-ui/react";

interface ConditionalLinkProps extends LinkProps {
  isLink?: boolean;
  isNextLink?: boolean;
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
}

export const ConditionalLink = ({
  isLink = true,
  isNextLink,
  isExternal,
  href,
  children,
  ...rest
}: ConditionalLinkProps) => {
  if (!isLink || !href) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (
      <Text fontSize={rest.fontSize} color={rest.color} display={rest.display} fontWeight={rest.fontWeight}>
        {children}
      </Text>
    );
  }

  if (isNextLink && !isExternal) {
    return (
      <NextLink href={href} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link {...rest}>{children}</Link>
      </NextLink>
    );
  }

  return (
    <Link href={href} target={isExternal && "_blank"} rel={isExternal && "noopener"} {...rest}>
      {children}
    </Link>
  );
};
