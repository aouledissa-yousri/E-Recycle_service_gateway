import { KeyError } from '../errors/KeyError';


export class LoginPayload{

    constructor(private username: string, private email: string, private password: string){}

    public getUsername(): string {
        return this.username
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public setUsername(username: string): void {
        if(username == undefined)
            this.username = ""
        this.username = username
    }

    public setEmail(email: string): void {
        if(email == undefined)
            this.email = ""
        this.email = email
    }

    public setPassword(password: string): void {
        if(password == undefined)
            throw new KeyError(password)
        this.password = password
    }

    public static createLoginPayload(data: any): LoginPayload {
        let loginPayload = new LoginPayload("", "", "")

        loginPayload.setUsername(data["username"])
        loginPayload.setEmail(data["email"])
        loginPayload.setPassword(data["password"])

        return loginPayload

    }

    public getData() {
        return {
            "username": this.username,
            "email": this.email,
            "password": this.password
        }
    }
    
}