import React, { Component } from 'react';
import './../css/Product.css'

class Product extends Component {
    render() {
        var { product } = this.props;
        return (
            <>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-3 mb-3">
                    <div class="pr-col">
                        <div class="pr-col-item">

                            <div class="item-img">
                                <a href='/productDetail'><img src={product.image} alt={product.name}/></a>
                            </div>
                            <div class="pr-item"></div>
                        </div>
                        <div className="pr-lable">
                            <div class="pr-txt">
                                <h4>{product.name}</h4>
                                <p>{product.price}<span>đ</span></p>
                            </div>
                            <div className='judge-5stars'>
                                {this.Ratting(product.rating)}
                            </div>
                            
                            <button 
                                type="button" 
                                class="btn btn-info mt-3 btn-add-product" 
                                onClick = {() => this.onAddToCart(product)} 
                            ><i class="fas fa-cart-plus mr-3"></i>THÊM VÀO GIỎ HÀNG</button>
                        </div>
                    
                    </div>  
                </div>      
            </>
        );
    }
    Ratting(rating){
        var result = []
        for(var i = 1; i<=rating; i++){
            result.push(<i class="fas fa-star"></i>);
        }
        for(var j = 1; j<=5-rating; j++){
            result.push(<i class="far fa-star"></i>)
        }
        return result;
    }

    onAddToCart = (product) =>{
        this.props.onAddToCart(product);
    }
}



export default Product;