import { KeyError } from '../errors/KeyError';

export class MakeRecycleRequestPayload { 

    constructor(
        private material: string,
        private unit: string,
        private location: string,
        private quantity: number,
        private dateSubmitted: string
    ){}

    public getMaterial(): string {
        return this.material
    }

    public getUnit(): string {
        return this.unit
    }

    public getLocation(): string {
        return this.location
    }

    public getQuantity(): number {
        return this.quantity
    }

    public getDateSubmitted(): string {
        return this.dateSubmitted
    }

    public setMaterial(material: string) {
        if(material == undefined)
            throw new KeyError(material)
        this.material = material
    }

    public setUnit(unit: string) {
        if(unit == undefined)
            throw new KeyError(unit)
        this.unit = unit
    }

    public setLocation(location: string) {
        if(location == undefined)
            throw new KeyError(location)
        this.location = location
    }

    public setQuantity(quantity: number) {
        if(quantity == undefined)
            throw new KeyError(quantity)
        this.quantity = quantity
    }

    public setDateSubmitted(dateSubmitted: string) {
        if(dateSubmitted == undefined)
            throw new KeyError(dateSubmitted)
        this.dateSubmitted = dateSubmitted
    }

    public static createMakeRecycleRequestPayload(payload: any): MakeRecycleRequestPayload {
        let makeRecycleRequestPayload = new MakeRecycleRequestPayload("","","",0,"")
        makeRecycleRequestPayload.setMaterial(payload["material"])
        makeRecycleRequestPayload.setUnit(payload["unit"])
        makeRecycleRequestPayload.setLocation(payload["location"])
        makeRecycleRequestPayload.setQuantity(payload["quantity"])
        makeRecycleRequestPayload.setDateSubmitted(payload["dateSubmitted"])

        return makeRecycleRequestPayload
    }

    public getData(){
        return {
            "material": this.material,
            "unit": this.unit,
            "location": this.location,
            "quantity": this.quantity,
            "dateSubmitted": this.dateSubmitted
        }
    }
}