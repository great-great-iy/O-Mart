import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import Products from '../components/Products';
import PropTypes from 'prop-types';


import * as actions from './../actions/index' ;
// import products from '../reducers/products';

class ProductsContainer extends Component {
    render() {
        var { products, sort, filter } = this.props;
        if(filter.typeProduct){
            products = products.filter((product) => {
                return product.typeProduct.toLowerCase().indexOf(filter.typeProduct.toLowerCase()) !== -1;
            });
        }
        if(filter.price.endPrice){
            products = products.filter((product) => {
                if(filter.price.startPrice <= product.price && filter.price.endPrice >= product.price)
                return 1;
            });
        }
        // products = t.filter((task)=>{
        //     if(filterTable.status === -1){
        //         return task;
        //     }else{
        //         return task.status === (filterTable.status === 1 ? true : false);
        //     }
        // });

        // if(searchTask.keyword !==''){
        //     tasks = tasks.filter((task)=>{
        //         return task.name.toLowerCase().indexOf(searchTask.keyword) !== -1;
        //     });
        // }

        if(sort.by==='price'){
            products.sort((a, b) => {
                if(a.price > b.price) return sort.value;
                else if(a.price < b.price) return -sort.value
                else return 0;
            });
        }
        return (    
            <Products>
                {this.showProduct(products)}
            </Products>                      
        );  
    }

    showProduct = (products) =>{
        var result = null;
        var { onAddToCart } = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                            key = {index}
                            product = {product}
                            onAddToCart = {onAddToCart}    
                            // onChangeMessage = {onChangeMessage}
                        />
            })
        }
        return result;
    }
}
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = (state) =>{
    return {
        products : state.products,
        sort : state.sortProduct,
        filter : state.filterProduct
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddToCart : (product) => {
            dispatch(actions.actAddToCart(product, 1))
        }
        // onChangeMessage : (message) =>{
        //     dispatch(actions.actChangeMessage(message))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);
