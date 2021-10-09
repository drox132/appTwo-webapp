import React from "react"

import Presentation from "../components/presentation/Presentation";
import ProductList from "../components/productList/ProductList";
import Ticket from "../components/ticket/Ticket";

import "./IndexPage.css"

const IndexPage = () =>{
    return (
        <div>
            <Presentation/>
            <div className="indexPage-content">
                <div>
                    <ProductList/>
                </div>
                <div>
                    <Ticket/>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default IndexPage;