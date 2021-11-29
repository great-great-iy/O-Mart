import React, { Component } from 'react';
import '../css/FilterProduct.css'

class FilterProduct extends Component{
    render(){
        return(
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
        );
    }
}

export default FilterProduct;