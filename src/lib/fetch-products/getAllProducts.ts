import {ProductsData} from "@/types/Product";

export const fetchProducts = async (limit:number,page:number):Promise<ProductsData | undefined> => {
    try {
        const response = await fetch(`http://localhost:3000/api/products?limit=${limit}&page=${page}`,{
            cache:'no-store'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data:ProductsData = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};