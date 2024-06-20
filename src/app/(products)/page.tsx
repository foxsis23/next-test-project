
import ProductsPage from "@/components/screen/products-page/ProductsPage";
import {fetchProducts} from "@/lib/fetch-products/getAllProducts";

//SSR


const Home = async({
       searchParams,
   }: {
    searchParams: {
        limit: string;
        page: string;
    };
}) => {
    const page = Number(searchParams.page);
    const limit = Number(searchParams.limit);

    const products = await fetchProducts(limit,page);
    return <ProductsPage data={products} />
}

export default Home
