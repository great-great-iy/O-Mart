import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowCart extends Component{
    render(){
        var { cart } = this.props;
        return(
            <>
                <h3>Giỏ Hàng</h3>
                <hr/>
                
                {/* <table class="table table-hover width-90">
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>image</td>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </tbody>
                </table> */}
                
                <div className="row width-90">
                    {this.item(cart)}                        
                </div>
                <hr/>
                
                <div class="row width-90 ">
                    
                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        {this.totalCart(cart)} sản phẩm đã chọn
                    </div>
                    
                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        
                        <button 
                            type="button" 
                            class="btn btn-danger"
                        >
                            <a href="#"> CHECKOUT <i class="fas fa-arrow-right"></i></a>
                        </button>
                        
                    </div>
                    
                </div>
                
            </>
        );
    }

    item = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = cart.map((item, index) => {
                if(index < 5){
                    return (
                        <>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
    
                                <img src={item.product.image} className="img-responsive" alt=""/>
    
                            </div>
    
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <h5>{item.product.name}</h5>
                            </div>
    
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <h5>{item.product.price}</h5>
                            </div>
                            
                            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                
                                <span><i class="fas fa-times"></i></span> 
                                
                            </div>
                            
                        </>
                    );
                }
            })
        }
        return result;
    }

    totalCart = (cart) =>{
        var result = 0;
        if(cart.length > 0){
            result = cart.length;
        }
        return result;
    }
}

const mapStateToProps = (state) =>{
    return({
        cart : state.cart
    });
}

export default connect(mapStateToProps,null) (ShowCart);