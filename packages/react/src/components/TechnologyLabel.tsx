import * as React from "react";
import { HStack, Wrap } from "@chakra-ui/react";
import { FadedHorizontalOneLine } from "./Faded";
import { GrayTag } from "./GrayTag";

type TechnologyLabelProps = {
  children: React.ReactNode;
  isMain?: boolean;
  isLink?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

export const TechnologyLabel = ({ isMain, ...props }: TechnologyLabelProps) => (
  <GrayTag isBold={isMain} title="تکنولوژی اصلی" {...props} />
);

type FadedTechnologyLabelsProps = {
  technologies: { code: string; name: string; is_main?: boolean }[];
  oneLine?: boolean;
};

export const FadedTechnologyLabels = ({ technologies, oneLine }: FadedTechnologyLabelsProps) => {
  if (!technologies || technologies.length === 0) return null;

  const renderedTechnologies = technologies.map((tech) => (
    <TechnologyLabel key={tech.code} isMain={tech.is_main}>
      {tech.name}
    </TechnologyLabel>
  ));
  if (oneLine) return <HStack as={FadedHorizontalOneLine}>{renderedTechnologies}</HStack>;
  return <Wrap>{renderedTechnologies}</Wrap>;
};
