import { KeyError } from '../errors/KeyError';


export class ChangePasswordPayload {
    
    constructor(private password: string) {}
    

    public getPassword(): string {
        return this.password
    }

    public setPassword(password: string) {
        if(password == undefined) 
            throw new KeyError(password)
        this.password = password
        
    }

    public static createChangePassworPayload(payload: any): ChangePasswordPayload {
        let changePasswordPayload = new ChangePasswordPayload("")
        changePasswordPayload.setPassword(payload["password"])
        return changePasswordPayload
    }

    public getData() {
        return {
            "password": this.password
        }
    }
}