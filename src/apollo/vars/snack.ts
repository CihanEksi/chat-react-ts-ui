import { makeVar } from "@apollo/client";
import { SnackBarProps } from "../../interfaces/Errors/snack.interfaces";

// we want to save alerts in apollo state.
export const snackVar = makeVar<SnackBarProps | undefined>(undefined);
