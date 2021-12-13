import React, { Component } from 'react';
import '../css/FilterProduct.css'

class FilterProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            typeProduct : '',
            startPrice : '',
            endPrice : ''
        }
    }
    render(){
        var { startPrice, endPrice } = this.state;
        var { trademarkProduct } = this.props;
        return(
            <div className="filter">
            {/* Lọc theo loại sản phẩm */}
                <div className="product-filter"> 
                    <label>Thức ăn</label>
                    <hr/>
                    <button 
                        type="button" 
                        class="btn btn-product-picker"
                        onClick = { () => this.onFilterType('Hat kho')}
                    >Hạt Khô</button>
                    <button 
                        type="button" 
                        class="btn btn-product-picker"
                        onClick = { () => this.onFilterType('Pate & Sup')}
                    >Pate {'&'} Súp</button>
                    <button 
                        type="button" 
                        class="btn btn-product-picker"
                        onClick = { () => this.onFilterType('Banh thuong')}
                    >Bánh thưởng</button>
                    <button 
                        type="button" 
                        class="btn btn-product-picker"
                        onClick = { () => this.onFilterType('Xuong')}
                    >Xương canxi</button>
                </div>
            <br/>
            {/* Lọc theo giá sản phẩm */}
                <div className="price-filter">

                    <form 
                        // onSubmit={() => this.onFilterPrice(startPrice, endPrice)}
                    >                                

                        <div className="form-group">
                            <label>Lọc theo giá</label>
                            <hr/>
                            <input 
                                type="text" 
                                className="form-control min-price-filter" 
                                placeholder="Từ"
                                name='startPrice'
                                value={ startPrice }
                                onChange={this.onChange}
                            />
                            -
                            <input 
                                type="text" 
                                className="form-control max-price-filter" 
                                placeholder="Đến"
                                name='endPrice'
                                value={ endPrice }
                                onChange={this.onChange}
                            />
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-price-filter"
                            onClick={() => this.onFilterPrice(startPrice, endPrice)}
                        >Lọc</button>
                    </form>                                                        
                                                                                    
                </div>
                <br/>
            {/* Lọc theo thương hiệu sản phẩm */}
                <div className="brand-filter">
                    <label>Các nhãn hàng</label>
                    <hr/>  
                                                        
                    <div class="checkbox tag-brands">

                        <label>
                            <input 
                                type="checkbox" 
                                name = 'all'
                                checked = {true}
                            />
                            Tất cả
                        </label>
                        {this.showTrademarkProduct(trademarkProduct)}
                    </div>
                                                                                                                
                </div>
            </div>
        );
    }

    showTrademarkProduct = (trademarkProduct) =>{ 
        var result = null;
        result = trademarkProduct.map((trademark, index) => {
            console.log(trademark.trademark.name.toLowerCase().split(' ').join(''));
            return  <label key={index}>
                        <input 
                        type="checkbox" 
                        name = {trademark.trademark.name.toLowerCase().split(' ').join('')}
                        value=""/>
                        {trademark.trademark.name}
                    </label>
        });

        return result;
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name] : value
        });
    }

    onFilterType = (typeProduct) => {
        this.props.onFilterProduct({
            typeProduct : typeProduct,
            price : {
                startPrice : this.state.startPrice,
                endPrice : this.state.endPrice
            }
        })
    }
    onFilterPrice = (startPrice, endPrice)=>{
        this.props.onFilterProduct({
            typeProduct : this.state.typeProduct,
            price : {
                startPrice : startPrice,
                endPrice : endPrice
            }
        });
    }
}

export default FilterProduct;