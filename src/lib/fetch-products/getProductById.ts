
export const fetchProductById = async (id:string) => {
    try {
        const response = await fetch(`https://next-test-project-ruby.vercel.app/api/products/${id}`,{
            cache:'force-cache'
        });

        if (!response.ok) {
            throw new Error('Error occurred');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};