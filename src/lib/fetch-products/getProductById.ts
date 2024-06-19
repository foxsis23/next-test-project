import axios from "axios";

export const fetchProductById = async (id:string) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};