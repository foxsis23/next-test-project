import { MetadataRoute } from 'next'
import {fetchProducts} from "@/lib/fetch-products/getAllProducts";
import {IProduct} from "@/types/Product";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://next-test-project-ruby.vercel.app';

    const data = await fetch(`${baseUrl}/api/products?limit=20&page=1`);

    const {products} = await data.json();

    return products.map((product:IProduct) => ({
        url:`${baseUrl}/product/${product.id}`,
        lastModified:new Date(Date.now())
    }))

}