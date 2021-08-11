export type Source = string;
export type Sandbox = (sandbox: Record<string | number | symbol, any>) => any;
export type Interceptor = (source: Source) => Source
export type Interceptors = Array<Interceptor>
interface ExecOptions {
    interceptors?: Interceptors;
}
export type Exec = (source : Source , execOptions?: ExecOptions) => Sandbox;