import React from 'react';
import {fetchProductById} from "@/lib/fetch-products/getProductById";
import ProductItemPageById from "@/components/screen/product-item-page/ProductItemPageById";

//SSG

const ProductItemPage = async({params}:{params:{id:string}}) => {
    const product = await fetchProductById(params.id);

    return <ProductItemPageById product={product} />
};

export default ProductItemPage;