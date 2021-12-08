import React from 'react';
import { Component } from 'react';
import Banner from '../Banner';
import ShowProductDetail from '../ShowProductDetail';
import Footer from '../Footer';


class ProductDetail extends Component{
    render(){
        return(
            <>
                <Banner banner = 'cm-product-detail-banner'/>
                <ShowProductDetail/>
            </>
        );
    }
}

export default ProductDetail;