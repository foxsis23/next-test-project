import {products} from "../../data/products";

export interface IProduct{
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    images: string[]
}

export interface ProductsData{
    page:number,
    limit:number,
    total: number,
    products: IProduct[],
}