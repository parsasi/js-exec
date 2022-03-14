import { ConfigCallbacks, ConfigCallbackNameResults } from "../types";
import { getFunctionsName, concatenateNames } from "../utils";
export const getConfigCallbackNames = (
  callbacks: ConfigCallbacks
): ConfigCallbackNameResults => {
  if (callbacks) {
    const names = getFunctionsName(callbacks);
    return {
      parameterText: concatenateNames(names),
      callbackNames: names,
    };
  }
  return {
    parameterText: "",
    callbackNames: [],
  };
};
