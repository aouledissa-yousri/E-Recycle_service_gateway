import { KeyError } from '../errors/KeyError';


export class CompleteRecycleRequestPayload {

    constructor(private id: number) {}

    public getId(): number {
        return this.id
    }

    public setId(id: number) {
        if(id == undefined)
            throw new KeyError(id)
        this.id = id
    }

    public static createCompleteRecycleRequestPayload(payload: any): CompleteRecycleRequestPayload{
        let withDrawRecycleRequestPayload = new CompleteRecycleRequestPayload(0)
        withDrawRecycleRequestPayload.setId(payload["id"])
        return withDrawRecycleRequestPayload
    }

    public getData() {
        return {
            "id": this.id
        }
    }

}