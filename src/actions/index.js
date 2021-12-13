import * as Types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) =>{
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) =>{
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}


export const actRemoveProductInCart = (product) =>{
    return {
        type : Types.REMOVE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) =>{
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}


export const sortProduct = (sort) =>{
    return {
        type: Types.SORT_PRODUCT,
        sort
    }
}

export const filterProduct = (filter) =>{
    return{
        type: Types.FILTER_PRODUCT,
        filter
    }
}