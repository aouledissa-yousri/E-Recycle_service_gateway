import { KeyError } from "../errors/KeyError"
import { RequestPasswordResetPayload } from './RequestPasswordResetPayload';

export class ResetPasswordPayload {

    constructor(private username: string, private password: string, private email: string){}

    public getUsername(): string {
        return this.username
    }

    public getPassword(): string {
        return this.password
    }

    public getEmail(): string {
        return this.email
    }

    public setUsername(username: string): void {
        if(username == undefined)
            this.username = ""
        this.username = username
    }

    public setPassword(password: string): void {
        if(password == undefined)
            this.password = ""
        this.password = password
    }

    public setEmail(email: string): void {
        if(email == undefined)
            this.email = ""
        this.email = email
    }

    public setData(data: any): void{
        this.setUsername(data["username"])
        this.setEmail(data["email"])
        this.setPassword(data["password"])
    }

    public static createResetPasswordPayload(data: any) {
        let resetPasswordPayload = new ResetPasswordPayload("", "", "")
        resetPasswordPayload.setUsername(data["username"])
        resetPasswordPayload.setEmail(data["email"])
        resetPasswordPayload.setPassword(data["password"])

        return resetPasswordPayload
    }


    public getData() {
        return {
            "username": this.username,
            "email": this.email,
            "password": this.password
        }
    }

}