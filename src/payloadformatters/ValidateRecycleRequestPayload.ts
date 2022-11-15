import { KeyError } from '../errors/KeyError';


export class ValidateRecycleRequestPayload{

    constructor(private id: number) {}

    public getId(): number {
        return this.id
    }

    public setId(id: number) {
        if(id == undefined)
            throw new KeyError(id)
        this.id = id
    }

    public static createValidateRecycleRequestPayload(payload: any): ValidateRecycleRequestPayload{
        let withDrawRecycleRequestPayload = new ValidateRecycleRequestPayload(0)
        withDrawRecycleRequestPayload.setId(payload["id"])
        return withDrawRecycleRequestPayload
    }

    public getData() {
        return {
            "id": this.id
        }
    }

}