
export class RequestPasswordResetPayload {

    constructor(private username: string, private password: string){}

    public getUsername(): string {
        return this.username
    }

    public getPassword(): string {
        return this.password
    }

    public setUsername(username: string) : void {
        if(username == undefined)
            this.username = ""
        this.username = username
    }

    public setPassword(password: string) : void {
        if(password == undefined)
            this.password = ""
        this.password = password
    }

    public static createPasswordResetPayload(data: any): RequestPasswordResetPayload {
        let passwordResetPayload = new RequestPasswordResetPayload("", "")
        passwordResetPayload.setPassword(data["password"])
        passwordResetPayload.setUsername(data["username"])
        return passwordResetPayload
    }

    public getData() {
        return {
            "password": this.password,
            "username": this.username
        }
    }

}