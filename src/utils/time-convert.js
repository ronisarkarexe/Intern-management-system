export const getLocalTime = (time) => {
  return new Date(time).toLocaleDateString("en-US");
};
