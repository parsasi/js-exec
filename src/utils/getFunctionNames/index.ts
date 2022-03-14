export const getFunctionName = (callback: Function) => callback.name;

export const getFunctionsName = (callbacks: Function[]) =>
  callbacks.map(getFunctionName);
