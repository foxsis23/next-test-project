
export const fetchProducts = async (limit:number,page:number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/products?limit=${limit}&page=${page}`,{
            cache:'no-store'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};