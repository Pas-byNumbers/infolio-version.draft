export const formatDateTime = dateTime => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(dateTime).toLocaleDateString(undefined, options);
};