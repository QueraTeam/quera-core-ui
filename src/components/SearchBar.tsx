import * as React from "react";
import { Input, InputGroup, InputRightElement, Spinner, Card } from "@chakra-ui/react";

import { mdiMagnify, mdiClose } from "@mdi/js";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { MdIcon } from "./MdIcon";

interface SearchBarIconProps {
  searching: boolean;
  canClearSearch: boolean;
  handleClearSearch: () => void;
}

const SearchBarIcon = ({ searching, canClearSearch, handleClearSearch }: SearchBarIconProps) => {
  let icon;
  if (searching) {
    icon = <Spinner />;
  } else if (canClearSearch) {
    icon = (
      <MdIcon
        icon={mdiClose}
        cursor="pointer"
        boxSize={6}
        onClick={() => {
          handleClearSearch();
        }}
      />
    );
  } else {
    icon = <MdIcon icon={mdiMagnify} boxSize={6} />;
  }
  return <InputRightElement>{icon}</InputRightElement>;
};

export interface SearchBarProps {
  placeholder: string;
  handleSearch: (debouncedSearchTerm: string) => void;
  isLoading: boolean;
  value: string;
}

export const SearchBar = ({ placeholder, handleSearch, isLoading, value }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = React.useState(value || "");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 1000);

  React.useEffect(() => {
    handleSearch(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleClearSearch = () => {
    // instantly clear search
    setSearchTerm("");
    handleSearch("");
  };

  const isSearching = searchTerm.length > 0 && isLoading;

  return (
    <Card position="relative" borderRadius="xl" boxShadow="unset">
      <InputGroup zIndex="dropdown" size="lg">
        <SearchBarIcon
          searching={isSearching}
          canClearSearch={searchTerm.length > 0}
          handleClearSearch={handleClearSearch}
        />
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(searchTerm)}
          placeholder={placeholder}
          fontSize="md"
        />
      </InputGroup>
    </Card>
  );
};
