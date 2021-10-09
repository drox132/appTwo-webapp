import React, {useReducer} from "react"
import ProductToBuyContext from "./ProductToBuyContext";
import ProductToBuyReducer from "./ProductToBuyReducer";


const ProductToBuyState = (props) =>{

    const initialState = {
        products : []
    }
    const [state, dispatch] = useReducer(ProductToBuyReducer, initialState);

    const appendProduct = (product) =>{
        dispatch({
            type:'ADDING',
            payload: product
        })
    }

    const restartState = () =>{
        dispatch({
            type:'RESTART',
            payload: initialState
        })
    }

    return (
        <ProductToBuyContext.Provider value={{
            products : state.products,
            appendProduct,
            restartState
        }}>
            {props.children}
        </ProductToBuyContext.Provider>
    )
}

export default ProductToBuyState;