import {IProduct} from "./IProduct.ts";

export type IProductsResponseType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[];
}