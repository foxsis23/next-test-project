import {IProduct} from "@/types/Product";

export const fetchProductById = async (id:string):Promise<IProduct | undefined> => {
    try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`,{
            cache:'force-cache'
        });

        if (!response.ok) {
            throw new Error('Error occurred');
        }

        const data:IProduct = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};