import { Divider } from 'antd';
import React from 'react'
import { ProductListItem } from './ProductsListItems/ProductListItem';

export const ProductList = ({productsDBtoList, deleteProduct}) => {
    return (
        <>
            <Divider orientation="left">Lista de productos</Divider>
            
            <ul>
                {productsDBtoList.map(product => 
                    <ProductListItem product={product} key={product._id} deleteProduct={deleteProduct}/>
            )}
            </ul>
        </>
    )
}

