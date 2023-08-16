import * as React from "react";
import { Tooltip, CircularProgress } from "@chakra-ui/react";
import { persianDigits } from "src/utils/string";

export const ProblemIcon = ({ solvedPercent }: { solvedPercent: number }) => {
  let tooltipLabel;

  switch (solvedPercent) {
    case 100:
      tooltipLabel = "حل کامل";
      break;
    case null:
      tooltipLabel = "بدون تلاش";
      break;
    default:
      tooltipLabel = `حل ناتمام: ٪${persianDigits(solvedPercent)} نمره`;
      break;
  }
  return (
    <Tooltip label={tooltipLabel}>
      <span>
        <CircularProgress
          value={solvedPercent === null ? 0 : Math.max(solvedPercent, 10)}
          size={6}
          color={solvedPercent === 100 ? "green.400" : "brand.400"}
          trackColor="gray.300"
        />
      </span>
    </Tooltip>
  );
};
