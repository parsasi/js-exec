import { Source, Sandbox, Exec } from "../types";
import { runInterceptors } from "../interceptor";
import { getConfigCallbackNames } from "../configCallback";

function has(target, key) {
  return true;
}

function get(target, key) {
  if (key === Symbol.unscopables) return undefined;
  return target[key];
}

const exec: Exec = (source, options): Sandbox => {
  const interceptedSource = runInterceptors({
    source: source,
    interceptors: options?.interceptors,
  });

  const {
    parameterText: configCallbackParamsName,
    callbackNames: configCallbackNames,
  } = getConfigCallbackNames(options?.configCallbacks);
  const configCallbacks = options?.configCallbacks ?? [];

  const proxiesCache = new WeakMap();
  const sourceWithSand: Source = `with (sandbox ${
    configCallbackParamsName ? `, ${configCallbackParamsName}` : ""
  }) { ${interceptedSource} }`;
  const executableCode = new Function(
    "sandbox",
    ...configCallbackNames,
    sourceWithSand
  );

  return function (sandbox) {
    if (!proxiesCache.has(sandbox)) {
      const sandboxProxy = new Proxy(sandbox, { has, get });
      proxiesCache.set(sandbox, sandboxProxy);
    }
    try {
      executableCode(proxiesCache.get(sandbox), ...configCallbacks);
      if (options?.onSuccess) {
        return options.onSuccess();
      }
    } catch (e) {
      if (options?.onError) {
        return options.onError(e);
      }
      throw new Error(e);
    }
  };
};

export { exec };
