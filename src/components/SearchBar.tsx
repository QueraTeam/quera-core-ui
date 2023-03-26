import {
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Card,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mdiMagnify, mdiClose } from "@mdi/js";
import { omit, set } from "lodash";
import { useDebouncedValue } from "src/hooks/useDebouncedValue";
import { getSingleQueryParam } from "src/utils/querystring";
import { MdIcon } from "./MdIcon";

interface SearchBarIconProps {
  searching: boolean;
  canClearSearch: boolean;
  handleClearSearch: () => void;
}

const SearchBarIcon = ({
  searching,
  canClearSearch,
  handleClearSearch,
}: SearchBarIconProps) => {
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

export interface SearchBoxProps {
  placeholder: string;
  searchQueryName: string;
  url?: string;
}

export const SearchBar = ({
  placeholder,
  url,
  searchQueryName,
}: SearchBoxProps) => {
  const router = useRouter();
  const searchQueryValue = getSingleQueryParam(router.query[searchQueryName]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchQueryValue || "");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 1000);

  const handleSearch = (term: string) => {
    // term is same as what we have in param
    if (term === searchQueryValue || (term === "" && !searchQueryValue)) return;

    // remove the param if term is empty, else set new value.
    const newQuery =
      term.length === 0
        ? omit(router.query, searchQueryName)
        : set(router.query, searchQueryName, term);

    setLoading(true);
    router
      .push(
        {
          pathname: url,
          query: newQuery,
        },
        undefined,
        { shallow: false }
      )
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleSearch(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleClearSearch = () => {
    // instantly clear search
    setSearchTerm("");
    handleSearch("");
  };

  const isSearching = searchTerm.length > 0 && loading;

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
