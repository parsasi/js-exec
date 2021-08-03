export type Source = string;
export type Sandbox = (sandbox: Record<string | number | symbol, any>) => any;
export type Exec = (source: Source) => Sandbox;