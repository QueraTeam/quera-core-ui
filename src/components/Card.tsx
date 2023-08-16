import * as React from "react";
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  chakra,
  Divider,
  HeadingProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  forwardRef,
  HStack,
  Text,
} from "@chakra-ui/react";

const ReachedPageBottom = React.createContext(false);

interface CardHeaderProps extends HeadingProps {
  subtitle?: string;
}

export const CardHeader = forwardRef<CardHeaderProps, "h2">(({ as = "h2", subtitle, ...rest }, ref) => {
  const styles = useStyles();
  const heading = <chakra.header as={as} ref={ref} __css={styles.header} {...rest} />;

  if (subtitle)
    return (
      <HStack spacing={4}>
        {heading}
        {subtitle && (
          <Text as="span" color="text.pale">
            {subtitle}
          </Text>
        )}
      </HStack>
    );

  return heading;
});

export const CardRow = forwardRef<BoxProps, "div">((props, ref) => {
  const styles = useStyles();
  return <Box __css={styles.row} {...props} ref={ref} />;
});

export const CardBody = forwardRef<BoxProps, "div">((props, ref) => {
  const styles = useStyles();
  return <Box __css={styles.body} {...props} ref={ref} />;
});

export const CardButton = forwardRef<ButtonProps, "button">((props, ref) => {
  const { card: cardStyles, button: buttonStyles } = useStyles();
  buttonStyles.borderBottomRadius = cardStyles.borderRadius;
  return (
    <>
      <Divider />
      <Button ref={ref} sx={buttonStyles} variant="ghost" {...props} />
    </>
  );
});

export interface CardProps extends BoxProps {
  size?: "lg" | "md" | "sm";
}

export const Card = forwardRef<CardProps, "div">(({ __css = {}, size, children, ...rest }, ref) => {
  const styles = useMultiStyleConfig("Card", { size });

  return (
    <Box __css={{ ...styles.card, ...__css }} {...rest} ref={ref}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
});

interface CollapsibleCardProps extends CardProps {
  collapsible?: boolean;
  collapsed?: boolean;
  onCollapseToggle?: React.MouseEventHandler;
}
export const CollapsibleCard = ({
  collapsible = false,
  collapsed = false,
  onCollapseToggle,
  children,
  ...rest
}: CollapsibleCardProps) => (
  <Card {...rest}>
    {children}
    {collapsible && <CardButton onClick={onCollapseToggle}>{collapsed ? "مشاهده بیشتر" : "مشاهده کمتر"}</CardButton>}
  </Card>
);

export const FixedBottomCard = ({ children, ...rest }: CardProps) => {
  const reachedPageBottom = React.useContext(ReachedPageBottom);
  return (
    <Card
      position="fixed"
      borderRadius={0}
      bottom={0}
      left={0}
      right={0}
      zIndex="overlay"
      borderTopColor="border.gray"
      borderTopWidth="1px"
      display={reachedPageBottom ? "none" : "block"}
      {...rest}
    >
      {children}
    </Card>
  );
};
