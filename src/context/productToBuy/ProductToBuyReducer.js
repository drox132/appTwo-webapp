import {ADDING, RESTART} from "../types";

export default (state, action) => {
    const {payload, type} = action;

    switch (type){
        case ADDING :
            console.log(...state.products)
            if({...state.products.includes(payload)}){
                return {
                    ...state,
                    products: [...state.products, payload]
                }
            }
        case RESTART :
            return {
                ...state,
                products: []
            }
        default:
            return state
    }
}