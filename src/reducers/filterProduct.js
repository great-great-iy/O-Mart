import * as Types from '../constants/ActionTypes';

var initialState = {
                    typeProduct : '',
                    price : {
                        startPrice : 0,
                        endPrice : 0
                    },
                    trademark : ''
                };

var filterProduct = (state = initialState, action) =>{
    switch(action.type){
        case Types.FILTER_PRODUCT:
            var result = state;
            console.log(action.filter.typeProduct);
            if(action.filter.typeProduct || action.filter.price.endPrice) {
                result = {
                    typeProduct : action.filter.typeProduct,
                    price : {
                        startPrice : parseInt(action.filter.price.startPrice),
                        endPrice : parseInt(action.filter.price.endPrice)
                    }
                }
            }
        return result;
        default: return state;
    }
    
}

export default filterProduct;