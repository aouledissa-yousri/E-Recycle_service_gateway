import { KeyError } from "../errors/KeyError"

export class TwoFactorAuthPayload {

    constructor(private code: string){}

    public getCode(): string {
        return this.code 
    }

    public setCode(code: string){
        if(code == undefined)
            throw new KeyError("")
        this.code = code
    }

    public static createTwoFactorAuthPayload(data: any): TwoFactorAuthPayload {
        let twoFactorAuthPayload = new TwoFactorAuthPayload("")
        twoFactorAuthPayload.setCode(data["code"])
        
        return twoFactorAuthPayload

    }

    public getData() {
        return {
            "code": this.code
        }
    }
}