import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import sortProduct from './sortProduct';
import filterProduct from './filterProduct';
import trademark from "./trademark";

const appReducers = combineReducers({
    products,
    cart,
    sortProduct,
    filterProduct,
    trademark
});

export default appReducers;