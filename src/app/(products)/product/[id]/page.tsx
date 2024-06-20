import React from 'react';
import {fetchProductById} from "@/lib/fetch-products/getProductById";
import ProductItemPageById from "@/components/screen/product-item-page/ProductItemPageById";
import {Metadata} from "next";



export async function generateMetadata(
    { params }:{params:{id:string}},
): Promise<Metadata> {
    const product = await fetchProductById(params.id);

    return {
        title: product.title,
        description:product.description
    }
}

//SSG
const ProductItemPage = async({params}:{params:{id:string}}) => {
    const product = await fetchProductById(params.id);

    return <ProductItemPageById product={product} />


};

export default ProductItemPage;