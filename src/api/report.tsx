import { axiosClient } from "./rest/axios-client";

export type ReportIssuesType = {
  id: number;
  text: string;
  children: ReportIssuesType[];
  is_selectable: boolean;
};

export async function fetchReportIssues(recipientType: string, url: string) {
  const test = await axiosClient
    .get<ReportIssuesType[]>(url)
    .catch((e) => console.error(e.response.status, e.response.statusText));

  return test ? test.data : [];
}

export const reportAction = (
  slug: string,
  identifier: string | number,
  issues: number[] | string[],
  description: string,
  url: string,
) =>
  axiosClient.post(url, {
    slug,
    identifier,
    issues,
    description,
  });
