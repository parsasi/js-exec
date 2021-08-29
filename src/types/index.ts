export type Source = string;
export type Sandbox = (sandbox: Record<string | number | symbol, any>) => any;
export type Interceptor = (source: Source) => Source
export type Interceptors = Array<Interceptor>
export type OnSuccessHandler = () => void;
export type OnErrorHandler = (e : Error) => void;
interface ExecOptions {
    interceptors?: Interceptors;
    onSuccess?:  OnSuccessHandler;
    onError? : OnErrorHandler;
}
export type Exec = (source : Source , execOptions?: ExecOptions) => Sandbox;