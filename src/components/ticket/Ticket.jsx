import React, {useContext, useEffect} from "react";
import ProductToBuyContext from "../../context/productToBuy/ProductToBuyContext";
import HttpClient from "axios";
import Swal from "sweetalert2"

import "./Ticket.css"

const Ticket = () =>{

    const {products, restartState} = useContext(ProductToBuyContext);

    const gettingOnlYPrice = (productList) => {
        var list = []
        productList.map(product =>{list.push(product.price)})
        //console.log("aca comienza el proceso de obtener solo la lista de precio")
        //console.log(list)
        return list;

    }

    const sendToCalculateTotalPrice = async (products) =>{

        const priceList = gettingOnlYPrice(products);
        console.log("aca comienza el proceso de obtener solo la lista de precio")
        console.log(priceList)
        products.map(product =>{console.log(product.price)})
        await HttpClient.post("/ticket/calculate/total/price", priceList)
            .then(response =>{
                Swal.fire({
                    icon: 'info',
                    title: '¿confirma la compra del producto?',
                    text: 'El precio final es ' + response.data,
                    showDenyButton: true,
                    showConfirmButton: true,
                    confirmButtonText: 'comprar',
                    denyButtonText: `reiniciar`
                }).then((result) =>{
                    if(result.isConfirmed){
                        const ticketObject = {
                            totalPrice : response.data
                        }
                        HttpClient.post(`/ticket/insertticket`, ticketObject)
                            .then(() =>{
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Comprado',
                                    showConfirmButton: true,
                                    confirmButtonText: 'retroceder'
                                })
                                    restartState();
                            }
                            )
                    }
                    if(result.isDenied){restartState()}
                }
                )
                console.log(response.data)
            })

    }

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
                    onClick={(e) => sendToCalculateTotalPrice(products)}
                    className="ticket-button">calcular</button>
            </div>
        </div>
    )
}

export default Ticket;