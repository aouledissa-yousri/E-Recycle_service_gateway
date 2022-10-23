import { KeyError } from "../errors/KeyError"

export class ConfirmAccountPayload {

    constructor(private code: string){}

    public getCode(): string {
        return this.code 
    }

    public setCode(code: string){
        if(code == undefined)
            throw new KeyError("")
        this.code = code
    }

    public static createConfirmAccountPayload(data: any): ConfirmAccountPayload {
        let confirmAccountPayload = new ConfirmAccountPayload("")
        confirmAccountPayload.setCode(data["code"])
        
        return confirmAccountPayload

    }

    public getData() {
        return {
            "code": this.code
        }
    }
}