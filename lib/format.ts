const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(value: number | string): string {
  const str =
    typeof value === "number"
      ? value.toLocaleString("en-US", { maximumFractionDigits: 2 })
      : value;
  return str.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

export function formatPrice(price: number): string {
  return `${toBn(price)} টাকা`;
}

export function formatChange(percent: number): string {
  return `${toBn(Math.abs(percent).toFixed(1))}%`;
}

const UNIT_LABEL: Record<string, string> = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};
const UNIT_SHORT: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};
export const unitLabel = (u: string) => UNIT_LABEL[u] ?? u;
export const unitShort = (u: string) => UNIT_SHORT[u] ?? u;

export function banglaToday(): string {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());
}