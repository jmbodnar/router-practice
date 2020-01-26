export function jsonToDateString(dateJSON) {
  const date = new Date(dateJSON);
  return date.toLocaleDateString();
}
