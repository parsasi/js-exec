import { Interceptors , Source } from '../types'
export const runInterceptors = ({source , interceptors} : {source : Source , interceptors? : Interceptors}) : Source => {
    let interceptedSource = source
    if(interceptors){
        interceptors.forEach((interceptor) => {
            interceptedSource = interceptor(interceptedSource); 
        })
    }
    return interceptedSource
}
