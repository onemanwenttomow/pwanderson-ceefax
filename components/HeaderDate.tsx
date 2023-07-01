export default function HeaderDate() {
  const date = new Date().toLocaleDateString("en-UK", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedDate = date.replace(",", "");

  return <li>{formattedDate}</li>;
}
