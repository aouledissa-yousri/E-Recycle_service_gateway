import { KeyError } from "../errors/KeyError"
import { MakeRecycleRequestPayload } from './MakeRecycleRequestPayload';

export class GainCoinsPayload {

    constructor(private id: number, private recycleRequest: MakeRecycleRequestPayload){}

    public getId(): number {
        return this.id
    }

    public getRecycleRequest(): MakeRecycleRequestPayload {
        return this.recycleRequest
    }

    public setId(id: number) {
        if(id === undefined)
            throw new KeyError(id)
        this.id = id
    }

    
    public static createGainCoinsPayload(payload: any): GainCoinsPayload {
        let gainCoinsPayload = new GainCoinsPayload(0, MakeRecycleRequestPayload.createMakeRecycleRequestPayload(payload["recycleRequest"]))
        gainCoinsPayload.setId(payload["id"])

        return gainCoinsPayload

    }

    public getData() {
        return {
            "id": this.id,
            "recycleRequest": this.recycleRequest.getData()
        }
    }
}