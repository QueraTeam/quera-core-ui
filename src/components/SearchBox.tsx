import {
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  VStack,
  Text,
  useDisclosure,
  Card,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { mdiMagnify, mdiClose } from "@mdi/js";
import { omit } from "lodash";
import { useDebouncedValue } from "src/hooks/useDebouncedValue";
import { getSingleQueryParam } from "src/utils/querystring";
import { MdIcon } from "./MdIcon";
import { Empty } from "./Empty";

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
  searchHandler: (searchTerm: string) => Promise<any[]>;
  renderResultItem: (any) => ReactNode;
  emptyMessage: string;
  placeholder: string;
  url: string;
  searchQueryName: string;
}

export const SearchBox = ({
  searchHandler,
  renderResultItem,
  emptyMessage,
  placeholder,
  url,
  searchQueryName,
}: SearchBoxProps) => {
  const router = useRouter();
  const searchQueryValue = getSingleQueryParam(router.query[searchQueryName]);

  const [loading, setLoading] = useState(false);
  const resultsDisclosure = useDisclosure();

  const [searchTerm, _setSearchTerm] = useState(searchQueryValue || "");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 800);
  const [searchResults, setSearchResults] = useState(null);
  const containerRef = useRef(null);

  const setSearchTerm = (term: string) => {
    if (term) {
      setLoading(true);
      resultsDisclosure.onOpen();
    }
    _setSearchTerm(term);
  };

  const onClickOutside = (event: Event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      resultsDisclosure.onClose();
      ["click", "keydown"].forEach((eventName) => {
        document.removeEventListener(eventName, onClickOutside);
      });
    }
  };

  const onFocusInput = () => {
    resultsDisclosure.onOpen();
    ["click", "keydown"].forEach((eventName) => {
      document.addEventListener(eventName, onClickOutside);
    });
  };

  const handleShowAllResults = () => {
    resultsDisclosure.onClose();
    router.push({
      pathname: url,
      query: { [searchQueryName]: searchTerm },
    });
  };

  const handleClearSearch = () => {
    setSearchResults(null);
    resultsDisclosure.onClose();
    _setSearchTerm("");
    if (searchQueryValue) {
      router.push({ query: omit(router.query, searchQueryName) }, undefined, {
        shallow: false,
      });
    }
  };

  const isInitialMount = useRef(true);

  useEffect(() => {
    // Don't do anything on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!searchQueryValue && !resultsDisclosure.isOpen) {
      // Clear search in case of query param removal
      handleClearSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQueryValue]);

  useEffect(() => {
    if (debouncedSearchTerm.length === 0) return;

    searchHandler(debouncedSearchTerm).then((d) => {
      setSearchResults(d);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const isSearching = searchTerm.length > 0 && loading;
  const resultsIsOpen =
    resultsDisclosure.isOpen && debouncedSearchTerm.length > 0 && !loading;
  const finalResults = resultsIsOpen && searchResults ? searchResults : [];

  return (
    <Card
      ref={containerRef}
      position="relative"
      borderRadius="xl"
      boxShadow="unset"
    >
      <InputGroup zIndex="dropdown" size="lg">
        <SearchBarIcon
          searching={isSearching}
          canClearSearch={searchTerm.length > 0}
          handleClearSearch={handleClearSearch}
        />
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleShowAllResults()}
          onFocus={onFocusInput}
          placeholder={placeholder}
          fontSize="md"
          borderBottomLeftRadius={resultsIsOpen ? 0 : undefined}
          borderBottomRightRadius={resultsIsOpen ? 0 : undefined}
        />
      </InputGroup>
      <Card
        boxShadow="2xl"
        display={resultsIsOpen ? "block" : "none"}
        position="absolute"
        w="full"
        top={0}
        pt={12}
        zIndex="docked"
      >
        {finalResults.length > 0 ? (
          <>
            <Divider />
            <VStack spacing={0} align="stretch">
              {finalResults.map((result) => renderResultItem(result))}
            </VStack>
            <Divider />
            {finalResults.length > 0 && (
              <Button
                variant="ghost"
                size="lg"
                fontWeight="normal"
                w="full"
                px={4}
                h={14}
                colorScheme="gray"
                justifyContent="start"
                borderRadius={0}
                onClick={handleShowAllResults}
                textOverflow="ellipsis"
                overflow="hidden"
              >
                نمایش همه نتایج برای جستجوی{" "}
                <Text as="strong" mx={2} color="text.brand">
                  «{searchTerm}»
                </Text>
              </Button>
            )}
          </>
        ) : (
          <Empty size="sm" message={emptyMessage} />
        )}
      </Card>
    </Card>
  );
};