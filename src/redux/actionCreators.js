import * as actionTypes from './actionTypes.js';
import axios from 'axios';



// addIngredient
export const addIngredient = igtype => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,
    }
}


// removeIngredient
export const removeIngredient = igtype => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    }
}


// updatePurchasable
export const updatePurchasable = () => {
    return{
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}


// resetIngredient 
export const resetIngredient = () =>{
    return{
        type: actionTypes.RESET_INGREDIENT,
    }
}


// orderLoad 
export const loadOrders = orders =>{
    return{
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    }
}

// orderLoadFaield 
export const orderLoadFaield = () =>{
    return{
        type: actionTypes.ORDER_LOAD_FAILED,
    }
}

export const fatchOrders = () => dispatch => {
    axios.get("https://burger-project-d5a56-default-rtdb.firebaseio.com/orders.json")
    .then(response => {
        dispatch(loadOrders(response.data));
    })
    .catch(error =>{
        console.log(error)
    })
}