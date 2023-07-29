import { useColorModeValue } from "@chakra-ui/react";
import { useCallback } from "react";
import ReactSelect from "react-select";

// TODO: make it a chakra component (should accept chakra's style props, like Input)
export const Select: typeof ReactSelect = (props) => {
  const borderColorHover = useColorModeValue(
    "var(--chakra-colors-gray-300)",
    "var(--chakra-colors-whiteAlpha-400)"
  );
  const iconColor = useColorModeValue(
    "var(--chakra-colors-gray-400)",
    "var(--chakra-colors-whiteAlpha-500)"
  );
  const iconColorHover = useColorModeValue(
    "var(--chakra-colors-gray-700)",
    "var(--chakra-colors-whiteAlpha-700)"
  );
  const menuBgColor = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-gray-700)"
  );
  const optionBgColor = useColorModeValue(
    "white",
    "var(--chakra-colors-gray-700)"
  );
  const optionBgColorFocus = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-whiteAlpha-100)"
  );
  const optionColorSelected = useColorModeValue(
    "var(--chakra-colors-white-700)",
    "var(--chakra-colors-white-700)"
  );
  const optionColorDisabled = useColorModeValue(
    "var(--chakra-colors-gray-400)",
    "var(--chakra-colors-gray-500)"
  );
  const getOptionColor = useCallback(
    (isSelected: boolean, isDisabled: boolean) => {
      if (isDisabled) {
        return optionColorDisabled;
      }
      return isSelected ? optionColorSelected : "inherit";
    },
    [optionColorDisabled, optionColorSelected]
  );

  return (
    <ReactSelect
      isClearable
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      placeholder="جستجو کنید..."
      loadingMessage={() => "در حال جستجو..."}
      noOptionsMessage={() => "نتیجه‌ای پیدا نشد"}
      // @ts-ignore
      theme={(theme) => ({
        ...theme,
        borderRadius: "var(--chakra-radii-md)",
        colors: {
          ...theme.colors,
          primary: "var(--chakra-colors-brand-500)",
        },
      })}
      styles={{
        control: (provided, state) => ({
          ...provided,
          minHeight: "initial",
          height: "auto",
          background: "var(--chakra-colors-input-bg)",
          borderColor: state.isFocused
            ? "var(--chakra-colors-brand-500)"
            : "var(--chakra-colors-border-gray)",
          "&:hover": {
            borderColor: state.isFocused
              ? "var(--chakra-colors-brand-500)"
              : borderColorHover,
          },
        }),
        valueContainer: (provided) => ({
          ...provided,
          cursor: "text",
          padding: "0 var(--chakra-space-4)",
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "inherit",
        }),
        multiValue: (provided) => ({
          ...provided,
          borderRadius: "var(--chakra-radii-sm)",
        }),
        input: (provided) => ({
          ...provided,
          color: "inherit",
        }),
        menu: (provided) => ({
          ...provided,
          background: menuBgColor,
          border: "1px solid",
          borderColor: "var(--chakra-colors-border-gray)",
        }),
        option: (provided, { isFocused, isSelected, isDisabled }) => ({
          ...provided,
          background: isFocused ? optionBgColorFocus : optionBgColor,
          color: getOptionColor(isSelected, isDisabled),
          "&:hover": {
            background: optionBgColorFocus,
          },
        }),
        noOptionsMessage: (provided) => ({
          ...provided,
          color: "inherit",
        }),
        clearIndicator: (provided) => ({ ...provided, cursor: "pointer" }),
        indicatorsContainer: (provided) => ({
          ...provided,
          alignItems: "stretch",
          div: {
            paddingTop: 0,
            paddingBottom: 0,
            alignItems: "center",
            color: iconColor,
            "&:hover": {
              color: iconColorHover,
            },
          },
        }),
      }}
      {...props}
    />
  );
};
