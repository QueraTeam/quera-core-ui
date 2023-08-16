import { ParsedUrlQuery } from "querystring";

export const getSingleQueryParam = (queryParam: string | string[]): string => {
  if (!queryParam) return undefined;
  if (Array.isArray(queryParam) && queryParam.length >= 1) return queryParam[0];
  return queryParam as string;
};

export const getPageNumber = (
  query: ParsedUrlQuery,
  paramName: string = "page"
): number => Number(getSingleQueryParam(query[paramName])) || 1;
