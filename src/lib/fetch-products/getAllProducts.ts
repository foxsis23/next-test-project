import axios from "axios";

export const fetchProducts = async (limit:number,page:number) => {
    try {
        const response = await axios.get('http://localhost:3000/api/products', {
            params: {
                limit,
                page,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};