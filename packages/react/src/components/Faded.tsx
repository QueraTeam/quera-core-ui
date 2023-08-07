import styled from "@emotion/styled";
import * as React from "react";

export const FadedHorizontal = styled.div<{ percent?: number }>`
  mask-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) ${(props) => props.percent || 75}%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) ${(props) => props.percent || 75}%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const FadedHorizontalOneLine = styled(FadedHorizontal)`
  overflow-x: hidden;
  white-space: nowrap;
`;

export const FadedVertical = styled.div<{ percent?: number }>`
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) min(150px, ${(props) => 100 - (props.percent || 50)}%)
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) min(150px, ${(props) => 100 - (props.percent || 50)}%)
  );
`;

type StyledShortenerWrapperProps = {
  fade: boolean;
  fadedMaxHeight: number | string;
};
const StyledShortenerWrapper = styled.div<StyledShortenerWrapperProps>((props) => ({
  overflowY: "hidden",
  maxHeight: props.fade ? props.fadedMaxHeight : "auto",
}));

type FadedBoxProps = {
  fade: boolean;
  children: React.ReactNode;
  fadedMaxHeight: number | string;
  fadedPercent?: number;
};
// eslint-disable-next-line react/display-name
export const FadedBox = React.forwardRef<HTMLDivElement, FadedBoxProps>(
  ({ fade, fadedMaxHeight, fadedPercent = 30, children }, ref) => (
    <FadedVertical percent={fade ? fadedPercent : 100}>
      <StyledShortenerWrapper fadedMaxHeight={fadedMaxHeight} fade={fade} ref={ref}>
        {children}
      </StyledShortenerWrapper>
    </FadedVertical>
  ),
);
