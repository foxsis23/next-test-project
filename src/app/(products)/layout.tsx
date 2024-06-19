import React, {ReactNode} from 'react';


import styles from './ProductsLayout.module.css'

const ProductsLayout = ({children}:{children:ReactNode}) => (
    <main className={styles.wrapper}>
        {children}
    </main>
);

export default ProductsLayout;