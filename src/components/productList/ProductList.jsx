import React, {useEffect, useState, useContext} from "react";
import HttpClient from "axios"

import ProductToBuyContext from "../../context/productToBuy/ProductToBuyContext";
import Product from "../product/Product";

import "./ProductList.css";

const ProductList = () =>{

    const {appendProduct} = useContext(ProductToBuyContext);

    const products = [
        {
            name: "rubik cube",
            price: 12,
            url: "https://www.pnguniverse.com/wp-content/uploads/2021/05/cubo-de-rubikk-9ff0e1bc.png"
        },
        {
            name: "guitar",
            price: 650,
            url: "http://2.bp.blogspot.com/-MHqFJrgVQNw/U4uxERUDgZI/AAAAAAAAADU/QGQSEgB6dzs/s1600/Png+(12).png"
        },
        {
            name: "keyboard",
            price: 200,
            url: "https://images.vexels.com/media/users/3/136262/isolated/preview/e04bd9042f1695f0844fbe935b858d9c-icono-de-teclado-plano.png"
        }
    ]
    /*
    const [products, setProducts] = useState([])

    const getAllProducts = async () =>{
        await HttpClient.get('/product/getall')
            .then(response =>{
                setProducts(response.data)
            })
    }

    useEffect(async () =>{
        await getAllProducts();
    },[])


     */

    return (
        <div className="productList-base">
            <h1>Lista de productos</h1>
            <ul className="productList-list">
                {
                    products.map(particularProduct =>(
                        <Product
                        product={particularProduct}/>
                    ))
                }
            </ul>

        </div>
    )
}

export default ProductList;