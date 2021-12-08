import React, { Component } from 'react';
import ProductsContainer from './../../containers/ProductsContainer';
import Banner from '../Banner';
import FilterProduct from '../FilterProduct';


class Purchase extends Component{
    render() {
        return(
            <>
                <Banner banner = 'cm-product-banner'/>
                <div className="container mt-5">
                    <div class="row m-5">
                        <div>                          
                            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                <h2>Thức Ăn Hạt Cho Mèo</h2>
                            </div>
                            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <div className="dropdown">                                    
                                    <button 
                                        className="btn btn-primary dropdown-toggle btn-sort" 
                                        type="button" 
                                        id="dropdownSortMenu" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="true">
                                        Sắp xếp theo 
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownSortMenu">
                                        <li 
                                            // onClick = { () => this.onClick('name', '1')}
                                        >
                                            <a role="button">
                                                <span>
                                                    Giá: Thấp đến Cao
                                                </span>
                                            </a>
                                        </li>
                                        <li 
                                            // onClick = { () => this.onClick('name', '-1')}
                                        >
                                            <a role="button">
                                                <span>
                                                    Giá: Cao đến Thấp
                                                </span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li 
                                            // onClick = { () => this.onClick('status', '1')}
                                        >
                                            <a role="button">
                                                Bán Chạy
                                            </a>
                                        </li>
                                        <li 
                                            // onClick = { () => this.onClick('status', '-1')}
                                        >
                                            <a role="button">
                                                Mới nhất
                                            </a>
                                        </li>
                                    </ul>
                            
                                </div>
                            </div>                                          
                        </div>  
                        <div className='display-inline'>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <ProductsContainer/>
                            </div>                            
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <FilterProduct/>         
                            </div>
                        </div>
                        
                        
                    </div>
                        
                </div>
            </>
            
        );
    }
}

export default Purchase;