export default function getCurrentDate() {
  const today = new Date();
  const date = today.toISOString();
  return date.slice(0, 10);
}
