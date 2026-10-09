const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// "1850.5" -> "১,৮৫০.৫"
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

export function banglaToday(): string {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}