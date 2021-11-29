import React, { Component } from 'react';

class Products extends Component{
    render(){
        return(

            <>
                    {this.props.children}
            </>

        );
    }
}

export default Products;