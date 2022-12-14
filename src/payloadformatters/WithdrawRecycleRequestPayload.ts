import { KeyError } from '../errors/KeyError';


export class WithdrawRecycleRequestPayload {

    constructor(private id: number) {}

    public getId(): number {
        return this.id
    }

    public setId(id: number) {
        if(id == undefined)
            throw new KeyError(id)
        this.id = id
    }

    public static createWithDrawRecycleRequestPayload(payload: any): WithdrawRecycleRequestPayload{
        let withDrawRecycleRequestPayload = new WithdrawRecycleRequestPayload(0)
        withDrawRecycleRequestPayload.setId(payload["id"])
        return withDrawRecycleRequestPayload
    }

    public getData() {
        return {
            "id": this.id
        }
    }

}