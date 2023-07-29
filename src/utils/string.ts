import { truncate } from "lodash";

const ENGLISH_DIGITS = "0123456789";
const PERSIAN_DIGITS =
  "\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9";
const ARABIC_DIGITS =
  "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";

export function persianDigits(value: string | number): string {
  if (typeof value === "number")
    return value.toLocaleString("fa-IR", { useGrouping: false });
  return value
    .replace(
      new RegExp(`[${ENGLISH_DIGITS}]`, "g"),
      (d) => PERSIAN_DIGITS[ENGLISH_DIGITS.indexOf(d)]
    )
    .replace(
      new RegExp(`[${ARABIC_DIGITS}]`, "g"),
      (d) => PERSIAN_DIGITS[ARABIC_DIGITS.indexOf(d)]
    );
}

export function persianGroupedDigits(value: string | number): string {
  if (typeof value === "number")
    return value
      .toLocaleString("fa-IR", { useGrouping: true })
      .replaceAll("٬", "٫");
  return value
    .replace(
      new RegExp(`[${ENGLISH_DIGITS}]`, "g"),
      (d) => PERSIAN_DIGITS[ENGLISH_DIGITS.indexOf(d)]
    )
    .replace(
      new RegExp(`[${ARABIC_DIGITS}]`, "g"),
      (d) => PERSIAN_DIGITS[ARABIC_DIGITS.indexOf(d)]
    );
}

export function englishDigits(str: string): string {
  return str
    .replace(
      new RegExp(`[${PERSIAN_DIGITS}]`, "g"),
      (d) => ENGLISH_DIGITS[PERSIAN_DIGITS.indexOf(d)]
    )
    .replace(
      new RegExp(`[${ARABIC_DIGITS}]`, "g"),
      (d) => ENGLISH_DIGITS[ARABIC_DIGITS.indexOf(d)]
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function humanizePersianDigits(str: string | number): string {
  throw new Error(
    'Deprecated. Use number.toLocaleString("fa-IR", options) instead.'
  );
  // return persianDigits(str.toLocaleString());
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function persianFloat(str: string | number): string {
  throw new Error(
    'Deprecated. Use number.toLocaleString("fa-IR", options) instead.'
  );
  // return persianDigits(str).replace(".", "٫");
}

export function truncateFilename(filename: string, length: number): string {
  const parts = filename.split(/\.(?=[^.]+$)/);
  if (parts[0].length <= length) return filename;
  parts[0] = truncate(parts[0], { length });
  return parts.join("");
}
