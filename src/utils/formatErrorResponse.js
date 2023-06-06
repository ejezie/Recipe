export const formatErrorResponse = (error) => {
  const message = error.response.data.message || error.message;
  return message;
};
