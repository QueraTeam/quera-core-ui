import { PinButton, PinProps } from "./PinButton";

export const PinJob = (props: PinProps) => <PinButton {...props} />;

export const IconPinJob = (props: PinProps) => (
  <PinJob {...props} hintType="tooltip" variant="unstyled" />
);
