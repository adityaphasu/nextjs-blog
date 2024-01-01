export default function getFormattedDate(dateString: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date(dateString));
}
