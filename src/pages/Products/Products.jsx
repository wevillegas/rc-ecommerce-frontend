import { Typography } from 'antd'
import React, { useState } from 'react'
import { ProductsAdd } from './ProductsAdd/ProductsAdd'
import { ProductList } from './ProductsList/ProductList'
import { ProductsFromDB } from '../../constants/productsFromDB'

const newProduct = {
    name: 'Café dolca',
    price: 500,
    quantity: 15,
    stock: true,
    _id: "algo"
}

export const Products = ({ productsDB }) => {

    // hook, el state genera un array con dos valores, el primero tiene el producto como yo lo inicialice, y el segundo tiene la funcion que actualiza  
    const [products, productsState] = useState(ProductsFromDB)


    //   const updateProducts = (nuevoProducto) => {

    // creo un nuevo array a partir del original
    //     const newArray = [...products]

    // mando un nuevo elemento al nuevo array el cual ya no depende del anterior
    //     newArray.push(newProduct)
    //     productsState(newArray)
    //   }

    const deleteProduct = (id) => {
        const newArray = products.filter(prod => prod._id !== id)
        productsState(newArray)
    }

    return (
        <div>
            <Typography.Title level={1}>Products</Typography.Title>
            <ProductsAdd />
            <ProductList productsDBtoList={products} deleteProduct={deleteProduct}/>
            {/* <button onClick={() => updateProducts}>Añadir</button> */}
        </div>
    )
}
