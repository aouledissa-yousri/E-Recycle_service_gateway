import jwtDecode from "jwt-decode"
import { InvalidTokenError } from "jwt-decode"

export function checkAccessToken(){

    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor){

        const original = descriptor.value
        
        descriptor.value = async function(...args: any[]){

            try{
                jwtDecode(args[0])
                return original.apply(target, args)

            }catch(error){
                
                if(error instanceof InvalidTokenError)
                    return {"message": "invalid token"}
                
                return {"message": "unknown error"}
                
            }
            
        }
    }
}