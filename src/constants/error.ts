import { SnackBarProps } from "../interfaces/Errors/snack.interfaces";

const UNKNOWN_ERROR_MESSAGE = "An unknown error occurred.";

const UNKNOWN_ERROR_ERROR_SNACK: SnackBarProps = {
  severity: "error",
  message: UNKNOWN_ERROR_MESSAGE,
};

export { UNKNOWN_ERROR_ERROR_SNACK };
