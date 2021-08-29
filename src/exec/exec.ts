import { Source, Sandbox, Exec } from '../types'
import { runInterceptors } from '../interceptor'

function has(target, key) {
    return true
}

function get(target, key) {
    if (key === Symbol.unscopables) return undefined
    return target[key]
}

const exec: Exec = (source , options): Sandbox => {
    const interceptedSource = runInterceptors({source : source, interceptors : options?.interceptors})
    const proxiesCache = new WeakMap()
    const sourceWithSand: Source = `with (sandbox) { ${interceptedSource} }`
    const executableCode = new Function('sandbox', sourceWithSand)

    return function (sandbox) {
        if (!proxiesCache.has(sandbox)) {
            const sandboxProxy = new Proxy(sandbox, { has, get })
            proxiesCache.set(sandbox, sandboxProxy)
        }
        try{
            executableCode(proxiesCache.get(sandbox))
            if(options?.onSuccess){
                return options.onSuccess();
            }
        }
        catch(e){
            if(options?.onError){
                return options.onError(e);
            }
            throw new Error(e)
        }
    }
}

export { exec }