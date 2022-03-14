export type Source = string;
export type SandboxValues = Record<string | number | symbol, any>;
export type Sandbox = (sandbox: SandboxValues) => any;

export type Interceptor = (source: Source) => Source;
export type Interceptors = Array<Interceptor>;

export type GlobalValues = SandboxValues;

export type OnSuccessHandler = () => void;
export type OnErrorHandler = (e: Error) => void;

interface ExecOptions {
  interceptors?: Interceptors;
  globalValues?: GlobalValues;
  onSuccess?: OnSuccessHandler;
  onError?: OnErrorHandler;
}
export type Exec = (source: Source, execOptions?: ExecOptions) => Sandbox;
