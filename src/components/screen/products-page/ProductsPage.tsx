'use client'

import React, {FC} from 'react';
import {ProductsData} from "@/types/Product";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Box, TablePagination, Typography} from "@mui/material";

import * as styles from './ProductsPage.styles';
import productStyles from './ProductsPage.module.css';
import ProductCard from "@/components/product-card/ProductCard";

interface ProductsPageProps{
    data:ProductsData
}

export const ProductsPage:FC<ProductsPageProps> = ({data}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const currentPage = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;

    const {products} = data;
    const {total} = data;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        page: number,
    ) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', (page + 1).toString());
        replace(`${pathname}?${params.toString()}`);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const params = new URLSearchParams(searchParams);
        params.set('limit', event.target.value.toString());
        params.set('page','1');
        replace(`${pathname}?${params.toString()}`);
    };

    return(
        <>
            <Typography variant='h3' sx={styles.title}>Products</Typography>
            <Box>
                <section className={productStyles.wrapper}>
                    {products.map(product => (
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </section>
                <TablePagination
                    component="div"
                    count={total}
                    page={currentPage - 1}
                    onPageChange={handleChangePage}
                    rowsPerPage={limit}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>

        </>
    )
};

export default ProductsPage;