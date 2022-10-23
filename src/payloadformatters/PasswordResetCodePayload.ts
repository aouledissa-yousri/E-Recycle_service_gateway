
import { KeyError } from "../errors/KeyError"

export class PasswordResetCodePayload {

    constructor(private code: string){}

    public getCode(): string {
        return this.code 
    }

    public setCode(code: string){
        if(code == undefined)
            throw new KeyError("")
        this.code = code
    }

    public static createPasswordResetCodePayload(data: any): PasswordResetCodePayload {
        let passwordResetCodePayload = new PasswordResetCodePayload("")
        passwordResetCodePayload.setCode(data["code"])
        
        return passwordResetCodePayload

    }

    public getData() {
        return {
            "code": this.code
        }
    }
}