import { MetadataRoute } from 'next'
import {fetchProducts} from "@/lib/fetch-products/getAllProducts";
import {IProduct} from "@/types/Product";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await fetchProducts(20,1);


    return data.products.map((product:IProduct) => ({
        url:`http://localhost:3000/product/${product.id}`,
        lastModified:new Date(Date.now())
    }))
}