import * as actionTypes from './actionTypes.js';



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