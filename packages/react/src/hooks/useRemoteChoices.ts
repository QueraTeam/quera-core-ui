import * as React from "react";
import { debounce } from "lodash";
import { AxiosResponse } from "axios";

type UseRemoteChoicesReturn<Choice = { value: any; label: any }> = {
  choices: Choice[];
  isLoading: boolean;
  handleSearchChange: (searchTerm: string) => void;
};

export const useRemoteChoices = <Choice = { value: any; label: any }, RemoteChoice = any>(
  initialChoices: Choice[],
  fetchChoices: (searchTerm: string) => Promise<AxiosResponse<RemoteChoice[]>>,
  normalizeRemoteChoices: (choice: RemoteChoice) => Choice,
  delay: number = 1000,
): UseRemoteChoicesReturn<Choice> => {
  const [remoteChoices, setRemoteChoices] = React.useState<Choice[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [searchMode, setSearchMode] = React.useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const search = React.useCallback(
    debounce((search_term: string) => {
      fetchChoices(search_term).then((response) => {
        setRemoteChoices(response.data.map(normalizeRemoteChoices));
        setIsLoading(false);
        setSearchMode(true);
      });
    }, delay),
    [],
  );

  const handleSearchChange = (searchTerm: string) => {
    if (searchTerm) {
      setIsLoading(true);
      search(searchTerm);
    } else {
      search.cancel();
      setIsLoading(false);
      setSearchMode(false);
      setRemoteChoices([]);
    }
  };

  return {
    choices: searchMode ? remoteChoices : initialChoices,
    handleSearchChange,
    isLoading,
  };
};
