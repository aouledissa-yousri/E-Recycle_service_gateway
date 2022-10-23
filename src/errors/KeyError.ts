export class KeyError extends Error {

    constructor(key: any){
        super(`KeyError: Invalid json object key value '${key}`)
    }
}