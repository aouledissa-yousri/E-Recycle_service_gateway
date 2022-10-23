import { UserProfilePayload } from './UserProfilePayload';
import { KeyError } from '../errors/KeyError';


export class SignUpPayload {

    constructor(private userProfile: UserProfilePayload, private name: string, private lastname: string){}


    public getUserProfile(): UserProfilePayload {
        return this.userProfile
    }

    public getName(): string {
        return this.name
    }

    public getLastname(): string {
        return this.lastname
    }

    public setUserProfile(data: any) {
        if(data == undefined)
            throw new KeyError(data)
        this.userProfile.setData(data)
    }

    public setName(name: string): void {
        if(name == undefined)
            throw new KeyError(name)
        this.name = name
    }

    public setLastName(lastname: string): void {
        if(lastname == undefined)
            throw new KeyError(lastname)
        this.lastname = lastname
    }


    public static createSignUpPayload(data: any): SignUpPayload {
        let signUpPayload = new SignUpPayload(
            new UserProfilePayload("", "", ""),
            "",
            ""
        )

        signUpPayload.setUserProfile(data["user_profile"])
        signUpPayload.setName(data["name"])
        signUpPayload.setLastName(data["lastname"])

        return signUpPayload
    }

    public getData() {
        return {
            "user_profile": this.userProfile.getData(),
            "name": this.name,
            "lastname": this.lastname
        }
    }



    
}