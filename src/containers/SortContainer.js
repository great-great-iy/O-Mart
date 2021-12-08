import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortProduct from '../components/SortProduct';



class CartContainer extends Component {
    render() {
        var { cart } = this.props;

        return (
            <>
                <SortProduct>
                    {this.showCartItem(cart)}
                </SortProduct>
            </>                  
        );  
    }
    showCartItem = (cart) =>{
        
    }
}

const mapStateToProps = (state) =>{
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartContainer);
