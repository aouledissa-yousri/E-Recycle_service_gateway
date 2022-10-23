export class KeyError extends Error {

    constructor(key: string){
        super(`KeyError: Invalid json object key value '${key}`)
    }
}