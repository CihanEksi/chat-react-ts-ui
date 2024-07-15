export interface CustomGqlError {
  graphQLErrors: { message: string }[];
}

const formatErrorMessage = (message: string) => {
  return message.charAt(0).toUpperCase() + message.slice(1);
};

const extractErrorMessages = (err: unknown | Error | CustomGqlError) => {
  if (!(err as CustomGqlError).graphQLErrors) {
    return (err as Error).message ?? "An error occurred";
  }
  const errorMessage = (err as CustomGqlError).graphQLErrors[0].message;
  const formattedErrorMessage = formatErrorMessage(errorMessage);
  return formattedErrorMessage;
};

export { extractErrorMessages };
