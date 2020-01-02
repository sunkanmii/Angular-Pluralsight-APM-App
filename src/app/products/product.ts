export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

//Not needed since we are not calculating anything or
//implementing any method.
//export class Product implements IProduct {
//    constructor(
//        public productId: number,
//        public productName: string,
//        public releaseDate: string,
//        public price: number,
//        public description: string,
//        public starRating: number,
//        public imageUrl: string){
//            
//        }
//
//        calulateDiscount(percent: number) : number{
//            return this.price - (this.price * percent / 100);
//        }
//}