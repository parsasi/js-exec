export type Source = string;
export type Sandbox = (sandbox: Record<string | number | symbol, any>) => any;
export type Interceptor = (source: Source) => Source;
export type Interceptors = Array<Interceptor>;

export interface ConfigCallbackNameResults {
  parameterText: string;
  callbackNames: string[];
}
export type ConfigCallback = (...params: any[]) => any;
export type ConfigCallbacks = Array<ConfigCallback>;

export type OnSuccessHandler = () => void;
export type OnErrorHandler = (e: Error) => void;

interface ExecOptions {
  interceptors?: Interceptors;
  configCallbacks?: ConfigCallbacks;
  onSuccess?: OnSuccessHandler;
  onError?: OnErrorHandler;
}
export type Exec = (source: Source, execOptions?: ExecOptions) => Sandbox;
