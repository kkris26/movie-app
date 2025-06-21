export const formatRating = (val) => {
  return Number.parseFloat(val).toFixed(1);
};

export const formatDate = (value) => {
  const date = new Date(value);
  const options = {
    //   weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};
