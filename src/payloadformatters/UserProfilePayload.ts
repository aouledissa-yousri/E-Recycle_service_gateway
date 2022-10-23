import { KeyError } from "../errors/KeyError"

export class UserProfilePayload {

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
            throw new KeyError(username)
        this.username = username
    }

    public setPassword(password: string): void {
        if(password == undefined)
            throw new KeyError(password)
        this.password = password
    }

    public setEmail(email: string): void {
        if(email == undefined)
            throw new KeyError(email)
        this.email = email
    }

    public setData(data: any): void{
        this.setUsername(data["username"])
        this.setEmail(data["email"])
        this.setPassword(data["password"])
    }

    public static createSignUpPayload(data: any) {
        let signUpPayload = new UserProfilePayload("", "", "")
        signUpPayload.setUsername(data["username"])
        signUpPayload.setEmail(data["email"])
        signUpPayload.setPassword(data["password"])

        return signUpPayload
    }


    public getData() {
        return {
            "username": this.username,
            "email": this.email,
            "password": this.password
        }
    }

}