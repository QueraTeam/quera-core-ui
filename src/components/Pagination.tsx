import * as React from "react";
import { Button, Flex, Tooltip, useTheme, useStyleConfig, HTMLChakraProps, ButtonProps } from "@chakra-ui/react";
import { range } from "lodash";

import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { persianDigits } from "../utils/string";
import { MdIcon } from "./MdIcon";
import { Card } from "./Card";

const calculatePages = (
  page: number,
  total: number,
  pageSize: number,
  siblingRange: number,
  beginRange: number,
  endRange: number,
) => {
  const pageCount = Math.ceil(total / pageSize);

  const m1 = beginRange;
  const m2 = pageCount - endRange + 1;
  const p1 = Math.max(page - siblingRange, 1);
  const p2 = Math.min(page + siblingRange, pageCount);

  let groups;
  if (p1 > m1) {
    if (m2 > p2) {
      groups = [range(1, m1 + 1), range(p1, p2 + 1), range(m2, pageCount + 1)];
    } else {
      groups = [range(1, m1 + 1), range(Math.min(p1, m2), pageCount + 1), []];
    }
  } else if (m2 > p2) {
    groups = [range(1, Math.max(p2, m1) + 1), range(m2, pageCount + 1), []];
  } else {
    groups = [range(1, pageCount + 1), [], []];
  }

  return { pageCount, groups };
};

interface PaginationButtonProps {
  isDisabled?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  tooltip?: string;
  display?: ButtonProps["display"];
  children: React.ReactNode;
}

const PaginationButton = ({ isDisabled, onClick, children, isActive, tooltip, display }: PaginationButtonProps) => (
  <Tooltip isDisabled={tooltip == null} label={tooltip}>
    <Button
      aria-label={tooltip ?? undefined}
      display={display}
      isDisabled={isDisabled}
      onClick={() => !isActive && onClick && onClick()}
      borderBottom={isActive ? "2px solid" : "none"}
      colorScheme={isActive ? "brand" : "gray"}
      borderColor="brand.500"
      variant="ghost"
      borderRadius={0}
      h="2.8rem"
      px={4}
    >
      {children}
    </Button>
  </Tooltip>
);

interface NumberGroupProps {
  page: number;
  group: number[];
  renderNumber?: (page: number) => React.ReactNode;
  onPageChange: (page: number) => void;
}

const NumberGroup = ({ page, group, renderNumber, onPageChange }: NumberGroupProps) => (
  <div>
    {group.map((i) => (
      <PaginationButton key={i} isActive={page === i} onClick={() => onPageChange(i)}>
        {renderNumber ? renderNumber(i) : persianDigits(i)}
      </PaginationButton>
    ))}
  </div>
);

interface EllipsisProps {
  group1: number[];
  group2: number[];
}

const Ellipsis = ({ group1, group2 }: EllipsisProps) => {
  if (group1.length === 0) return null;
  if (group2.length === 0) return null;
  if (group2[0] <= group1[group1.length - 1] + 1) return null;
  return <PaginationButton isDisabled>...</PaginationButton>;
};

export interface PaginationProps extends HTMLChakraProps<"div"> {
  /**
   * Current page number.
   */
  page: number;
  /**
   * Total number of items.
   */
  total: number;
  /**
   * Number of items per page.
   */
  pageSize: number;
  /**
   * Handler for page change.
   */
  onPageChange: (page: number) => any;
  /**
   * Number of always visible pages before and after the current one.
   */
  siblingRange?: number;
  /**
   * Number of always visible pages at the beginning.
   */
  beginRange?: number;
  /**
   * Number of always visible pages at the end.
   */
  endRange?: number;
  /**
   * Optional function applied to page numbers before rendering.
   */
  renderNumber?: (page: number) => React.ReactNode;

  isMobile: boolean;
  defaultSiblingRange: number;
}

export const Pagination = ({
  page,
  total,
  pageSize,
  onPageChange,
  siblingRange = 1,
  beginRange = 1,
  endRange = 1,
  renderNumber,
  isMobile,
  defaultSiblingRange,
  ...rest
}: PaginationProps) => {
  const { direction } = useTheme();
  const styles = useStyleConfig("Pagination", {});

  const finalSiblingsRange = siblingRange || defaultSiblingRange;

  const {
    pageCount,
    groups: [group1, group2, group3],
  } = React.useMemo(
    () => calculatePages(page, total, pageSize, finalSiblingsRange, beginRange, endRange),
    [page, total, pageSize, finalSiblingsRange, beginRange, endRange],
  );

  if (pageCount < 2) return null;

  const prevIcon = direction === "rtl" ? mdiChevronRight : mdiChevronLeft;
  const nextIcon = direction === "rtl" ? mdiChevronLeft : mdiChevronRight;

  const hasPrev = page > 1;
  const hasNext = page < pageCount;

  return (
    <Card as={Flex} __css={styles} borderRadius={[0, null, "xl"]} {...rest}>
      {!isMobile && (
        <PaginationButton isDisabled={!hasPrev} onClick={() => onPageChange(page - 1)} tooltip="صفحه قبلی">
          <MdIcon icon={prevIcon} boxSize={6} />
        </PaginationButton>
      )}
      <NumberGroup page={page} group={group1} renderNumber={renderNumber} onPageChange={onPageChange} />
      <Ellipsis group1={group1} group2={group2} />
      <NumberGroup page={page} group={group2} renderNumber={renderNumber} onPageChange={onPageChange} />
      <Ellipsis group1={group2} group2={group3} />
      <NumberGroup page={page} group={group3} renderNumber={renderNumber} onPageChange={onPageChange} />
      {!isMobile && (
        <PaginationButton isDisabled={!hasNext} onClick={() => onPageChange(page + 1)} tooltip="صفحه بعدی">
          <MdIcon icon={nextIcon} boxSize={6} />
        </PaginationButton>
      )}
    </Card>
  );
};
