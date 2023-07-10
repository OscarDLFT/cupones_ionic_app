export class Coupon {
    id_product: string;
    img: string;
    name: string;
    discount: number;
    active: boolean;

    constructor(data: any) {
        this.id_product = data.id_product;
        this.img = data.img;
        this.name = data.name;
        this.discount = data.discount;
        this.active = data.active;
    }

    isValid(): any {
        return this.id_product && this.img && this.name && this.discount;
    }
}
