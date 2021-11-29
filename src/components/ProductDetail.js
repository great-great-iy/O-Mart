import React from 'react';
import { Component } from 'react';

class ProductDetail extends Component{
    render(){
        return(
            <>
                
                <div class="row">
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div>
                                <img src='./../images/product-6_1.png'/>
                            </div>
                            <div>
                                <img src='./../images/product-6_2.png'/>
                            </div>
                            <div>
                                <img src='./../images/product-6_3.png'/>
                            </div>
                        </div>

                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div>
                                <img src='./../images/product-6.png'/>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                    </div>
                    
                </div>
                
            </>
        );
    }
}

export default ProductDetail;