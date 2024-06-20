import { MetadataRoute } from 'next'
import {fetchProducts} from "@/lib/fetch-products/getAllProducts";
import {IProduct} from "@/types/Product";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await fetchProducts(20,1);
    
    const baseUrl = 'https://next-test-project-ruby.vercel.app';

    return data.products.map((product:IProduct) => ({
        url:`${baseUrl}/product/${product.id}`,
        lastModified:new Date(Date.now())
    }))

}