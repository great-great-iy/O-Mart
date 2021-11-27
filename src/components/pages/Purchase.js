import React, { Component } from 'react';
import Banner from '../Banner';
import Items from '../Items';
import './../../css/Purchase.css'


class Purchase extends Component{
    render() {
        return(
            <>
                <Banner banner = 'cm-product-banner'/>
                <div className="container mt-5">
                    
                    <div class="row">
                        
                        <div class="row m-5">
                            
                            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                <h2>Thức Ăn Hạt Cho Mèo</h2>
                            </div>
                            
                            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                
                                <button type="button" class="btn btn-xs btn-primary btn-sort">Sắp xếp theo <i class="fas fa-chevron-down ml-2"></i></button>
                                
                            </div>
                            
                            
                        </div>
                        
                        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            
                            <div class="row mb-5">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items
                                        img='images/product-1.png'
                                        productName='Hạt Solidgold tím xanh'
                                        price='299.000'
                                    />
                                </div>
                                
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items 
                                        img='images/product-2.png' 
                                        productName='Hạt Solidgold cam tím' 
                                        price='299.000'></Items>
                                </div>
                                
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items 
                                        img='images/product-3.png' 
                                        productName='Hạt Solidgold xanh nâu' 
                                        price='299.000'></Items>
                                </div>
                            </div>

                            <div class="row mb-5">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items
                                        img='images/product-4.png'
                                        productName='Hạt Solidgold tím xanh'
                                        price='299.000'
                                    />
                                </div>
                                
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items 
                                        img='images/product-5.png' 
                                        productName='Hạt Solidgold cam tím' 
                                        price='299.000'></Items>
                                </div>
                                
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items 
                                        img='images/product-6.png' 
                                        productName='Hạt Solidgold xanh nâu' 
                                        price='299.000'></Items>
                                </div>
                            </div>

                            <div class="row mb-5">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items
                                        img='images/product-7.png'
                                        productName='Hạt Solidgold tím xanh'
                                        price='299.000'
                                    />
                                </div>
                                
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items 
                                        img='images/product-8.png' 
                                        productName='Hạt Solidgold cam tím' 
                                        price='299.000'></Items>
                                </div>
                                
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <Items 
                                        img='images/product-9.png' 
                                        productName='Hạt Solidgold xanh nâu' 
                                        price='299.000'></Items>
                                </div>
                            </div>
                                    
                        </div>
                        
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div className="filter">
                                <div className="product-filter">
                                    <label>Thức ăn</label>
                                    <hr/>
                                    <button 
                                        type="button" 
                                        class="btn btn-success btn-product-picker"
                                    >Hạt Khô</button>
                                    <button 
                                        type="button" 
                                        class="btn btn-success btn-product-picker"
                                    >Pate {'&'} Súp</button>
                                    <button 
                                        type="button" 
                                        class="btn btn-success btn-product-picker"
                                    >Bánh thưởng</button>
                                    <button 
                                        type="button" 
                                        class="btn btn-success btn-product-picker"
                                    >Xương canxi</button>
                                </div>
                            <br/>
                                <div className="price-filter">

                                    <form>                                
                                        <div class="form-group">
                                            <label>Lọc theo giá</label>
                                            <hr/>
                                            <input 
                                                type="text" 
                                                class="form-control min-price-filter" 
                                                placeholder="Từ"/>
                                            -
                                            <input 
                                                type="text" 
                                                class="form-control max-price-filter" 
                                                placeholder="Đến"/>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-filter">Lọc</button>
                                    </form>                                                        
                                                                                                    
                                </div>
                                <br/>
                                <div className="brand-filter">
                                    <label>Các nhãn hàng</label>
                                    <hr/>  
                                                                         
                                    <div class="checkbox tag-brands">
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value=""/>
                                            Tất cả
                                        </label>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value=""/>
                                            Solid gold
                                        </label>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value=""/>
                                            Wholehearted
                                        </label>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value=""/>
                                            Royal Canin
                                        </label>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value=""/>
                                            Bioline
                                        </label>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value=""/>
                                            Irisese
                                        </label>
                                        <label>
                                            <input 
                                                type="checkbox" 
                                                value=""/>
                                            Science diet
                                        </label>
                                    </div>
                                                                                                                                
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                        
                </div>
            </>
            
        );
    }
}

export default Purchase;