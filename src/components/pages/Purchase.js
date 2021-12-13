import React, { Component } from 'react';
import ProductsContainer from './../../containers/ProductsContainer';
import Banner from '../Banner';
import SortContainer from '../../containers/SortContainer';
import FilterContainer from '../../containers/FilterContainer';


class Purchase extends Component{
    render() {
        return(
            <>
                <Banner banner = 'cm-product-banner'/>
                <div className="container mt-5">
                    <div class="row m-5">
                        <div className='mb-5'>                          
                            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                <h2>Thức Ăn Hạt Cho Mèo</h2>
                            </div>
                            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <SortContainer/>
                            </div>                                          
                        </div>  
                        <div className='display-inline'>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <ProductsContainer/>
                            </div>                            
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <FilterContainer/>         
                            </div>
                        </div>
                        
                        
                    </div>
                        
                </div>
            </>
            
        );
    }
}

export default Purchase;