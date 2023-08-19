export const getCookie = (cookie: string, name: string): string =>
  cookie
    ?.split(";")
    .find((row) => row.trim().startsWith(name))
    ?.split("=")[1]
    .trim();

export const getBrowserCookie = (name: string): string => {
  if (typeof document === "undefined" || !document.cookie) return undefined;
  return getCookie(document.cookie, name);
};
