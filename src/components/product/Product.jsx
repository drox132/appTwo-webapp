import React, {useState, useContext} from "react";
import ProductToBuyContext from "../../context/productToBuy/ProductToBuyContext";

import "./Product.css";

const Product = ({product, selected}) =>{

    const {appendProduct} = useContext(ProductToBuyContext);

    const triggerToBuyProduct = (io) =>{
        selected = true;
        console.log(io)
    }

    return (
        <div className="product-base">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}$</p>
            <img
                className="product-image"
                src={product.url} />
            <button
                className="product-button"
                onClick={(e) => appendProduct(product)} >comprar</button>
        </div>
    )
}

export default Product;