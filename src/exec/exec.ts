import { Source, Sandbox, Exec } from '../types'
import { runInterceptors } from '../interceptor'

function has(target, key) {
    return true
}

function get(target, key) {
    if (key === Symbol.unscopables) return undefined
    return target[key]
}

const exec: Exec = ({source , interceptors}): Sandbox => {
    const interceptedSource = runInterceptors({source : source, interceptors : interceptors})
    const proxiesCache = new WeakMap()
    const sourceWithSand: Source = `with (sandbox) { ${interceptedSource} }`
    const executableCode = new Function('sandbox', sourceWithSand)

    return function (sandbox) {
        if (!proxiesCache.has(sandbox)) {
            const sandboxProxy = new Proxy(sandbox, { has, get })
            proxiesCache.set(sandbox, sandboxProxy)
        }
        return executableCode(proxiesCache.get(sandbox))
    }
}

export { exec }