import React, {useContext, useEffect} from "react";
import ProductToBuyContext from "../../context/productToBuy/ProductToBuyContext";

import "./Ticket.css"

const Ticket = () =>{

    const {products, restartState} = useContext(ProductToBuyContext);

    useEffect(() =>{

    },[products])
    return (
        <div className="ticket-base">
            <h1>Ticket de compra</h1>
            <div>
                <div className="ticket-titles">
                    <p>detalle</p>
                    <p>precio</p>
                </div>
                <ul className="ticket-list">
                    {
                        products.map(product => (
                            <div className="ticket-description">
                                <p>1 X {product.name}</p>
                                <p>{product.price}</p>
                            </div>

                        ))
                    }
                </ul>

            </div>
            <div>
                <button
                    className="ticket-button"
                    onClick={(e) => restartState()}>reiniciar</button>
                <button
                    className="ticket-button">calcular</button>
            </div>
        </div>
    )
}

export default Ticket;