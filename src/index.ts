// chakra-ui theme configs
export { theme } from "./theme";

// api exports
export { axiosClient } from "./api/rest/axios-client";

// components exports
export { AnimateCounter } from "./components/AnimateCounter";
export {
  Card,
  CardBody,
  CardButton,
  CardHeader,
  type CardProps,
  CardRow,
  CollapsibleCard,
  FixedBottomCard,
} from "./components/Card";

export { Empty, type EmptyResultProps } from "./components/Empty";
export { FadedBox, FadedHorizontal, FadedHorizontalOneLine, FadedVertical } from "./components/Faded";
export { FadedHorizontalScrollable, type FadedHorizontalScrollableProps } from "./components/FadedHorizontalScrollable";
export { FaqAccordion, type FaqAccordionProps, type IFaqItem } from "./components/FaqAccordion";
export { FileInputField, type FileInputFieldType } from "./components/FileInputField";
export { GrayTag } from "./components/GrayTag";
export {
  HiringCompanyLogo,
  type HiringCompanyLogoBorderType,
  type HiringCompanyLogoProps,
} from "./components/HiringCompanyLogo";
export { MdIcon, type MdIconProps } from "./components/MdIcon";
export { Pagination, type PaginationProps } from "./components/Pagination";
export { PinButton, type PinProps } from "./components/PinButton";
export { IconPinJob, PinJob } from "./components/PinJob";
export { ProblemIcon } from "./components/ProblemIcon";
export { QuoteItem, type QuoteItemProps } from "./components/QuoteItem";
export { RichText } from "./components/RichText";
export { AnchorLink, ScrollableCore, ScrollableHeader } from "./components/Scrollable";
export { SearchBar, type SearchBarProps } from "./components/SearchBar";
export { SearchBox, type SearchBoxProps } from "./components/SearchBox";
export { Select } from "./components/Select";
export { ShareLink } from "./components/ShareLink";
export { SidebarLabel, SidebarRow, SidebarValue } from "./components/Sidebar";
export { SignInModalDisclosureContext, SignInModalProvider, useSignInModal } from "./components/SignInModalProvider";
export { SocialNetworkIcon, type SocialNetworkTypes } from "./components/SocialNetworkIcon";
export { FadedTechnologyLabels, TechnologyLabel } from "./components/TechnologyLabel";
export { UploadResume, type UploadResumeProps } from "./components/UploadResume";
export { UserAvatar, type UserAvatarProps } from "./components/UserAvatar";
export { UserQCVProgress, type UserQCVProgressProps } from "./components/UserQCVProgress";
export { ReportButton, type ReportRecipient } from "./components/ReportButton";

// hooks exports
export { useDebouncedValue } from "./hooks/useDebouncedValue";
export { useRemoteChoices } from "./hooks/useRemoteChoices";
export { useScrollOnDrag } from "./hooks/useScrollOnDrag";

// utils exports
export { getBrowserCookie, getCookie } from "./utils/cookie";
export { getPageNumber, getSingleQueryParam } from "./utils/querystring";
export {
  englishDigits,
  humanizePersianDigits,
  persianDigits,
  persianFloat,
  persianGroupedDigits,
  truncateFilename,
} from "./utils/string";

// contexts export
export { ReachedPageBottom } from "./contexts";
