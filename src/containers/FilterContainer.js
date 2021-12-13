import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterProduct from '../components/FilterProduct';
import * as actions from './../actions/index';



class FilterContainer extends Component {
    render() {
        var { trademark, onFilterProduct } = this.props;
        return (
            <>
                <FilterProduct
                    onFilterProduct = {onFilterProduct}
                    trademarkProduct = {trademark}
                />                    
            </>                  
        );  
    }
}

const mapStateToProps = (state) =>{
    return {
        trademark : state.trademark
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onFilterProduct : (filter) => {
            dispatch(actions.filterProduct(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FilterContainer);
