import { UserProfilePayload } from './UserProfilePayload';
import { KeyError } from '../errors/KeyError';


export class SignUpPayload {

    constructor(private userProfile: UserProfilePayload, private name: string, private lastname: string, private recycleCoins: number){}


    public getUserProfile(): UserProfilePayload {
        return this.userProfile
    }

    public getName(): string {
        return this.name
    }

    public getLastname(): string {
        return this.lastname
    }

    public getRecycleCoins(): number {
        return this.recycleCoins
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

    public setRecycleCoins(recycleCoins: number): void {
        if(recycleCoins == undefined)
            throw new KeyError(recycleCoins)
        this.recycleCoins = recycleCoins
    }


    public static createSignUpPayload(data: any): SignUpPayload {
        let signUpPayload = new SignUpPayload(
            new UserProfilePayload("", "", ""),
            "",
            "",
            0
        )

        signUpPayload.setUserProfile(data["user_profile"])
        signUpPayload.setName(data["name"])
        signUpPayload.setLastName(data["lastname"])
        signUpPayload.setRecycleCoins(0)

        return signUpPayload
    }

    public getData() {
        return {
            "user_profile": this.userProfile.getData(),
            "name": this.name,
            "lastname": this.lastname,
            "recycleCoins": this.recycleCoins
        }
    }



    
}