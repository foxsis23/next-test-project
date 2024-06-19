import React, {ReactNode} from 'react';
import {Box} from "@mui/material";

import * as styles from './ProductsLayout.styles'

const ProductsLayout = ({children}:{children:ReactNode}) => (
    <Box sx={styles.wrapper}>
        {children}
    </Box>
);

export default ProductsLayout;