import * as Types from '../constants/ActionTypes';

var initialState = {
                    by : 'price',
                    value : 1
                };

var sortProduct = (state = initialState, action) =>{
    switch(action.type){
        case Types.SORT_PRODUCT:
            return {
                by : action.sort.by,
                value : parseInt(action.sort.value, 10)
            };
        default: return state;
    }
    
}

export default sortProduct;