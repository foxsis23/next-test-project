'use client'

import {FC} from 'react';
import {IProduct} from "@/types/Product";

import styles from './ProductItemById.module.css'
import {Button, Rating, Typography} from "@mui/material";
import {useRouter} from "next/navigation";


interface ProductItemPageByIdProps{
    product:IProduct;
}

const ProductItemPageById:FC<ProductItemPageByIdProps> = ({product}) => {
    const {push} = useRouter();

    return(
        <>
            <Button sx={{position: 'absolute', left: '5%', top: '10%'}} onClick={() => push('/')}>Go back</Button>
            <section className={styles.productSection}>
                <img src={product.image} alt='product-image' className={styles.img}/>
                <aside className={styles.infoSection}>
                    <Typography variant='h3'>
                        {product.title}
                        <span className={styles.category}>{product.category}</span>
                    </Typography>
                    <Typography variant='h6'>{product.description}</Typography>
                    <Typography variant='h6' sx={{color: 'red'}}>{product.price}$</Typography>
                    <Rating value={product.rating} readOnly/>
                </aside>
            </section>
        </>

    )
};

export default ProductItemPageById;