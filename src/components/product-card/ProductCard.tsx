'use client'

import React, {FC} from 'react';
import {IProduct} from "@/types/Product";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

import * as styles from './ProductCard.styles'
import {useRouter} from "next/navigation";

interface ProductCardProps{
    product:IProduct;
}

const ProductCard:FC<ProductCardProps> = ({product}) => {
    const router = useRouter();

    return(
        <Card sx={styles.card}>
            <CardMedia image={product.images[0]} sx={styles.img} />
            <CardContent>
                <Typography variant='h5'>{product.title}</Typography>
                <Typography variant='body2'>{product.description.slice(0,78) + '...'}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => router.push(`/product/${product.id}`)}>More</Button>
            </CardActions>
        </Card>
    )
};

export default ProductCard;