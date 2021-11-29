import React, { Component } from 'react';

class ShowCartItem extends Component{
    render(){
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
                    {this.item()}
                    {this.item()}
                    {this.item()}
                    {this.item()}
                    {this.item()}
                        
                </div>
                <hr/>
                
                <div class="row width-90 ">
                    
                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        Số lượng sản phẩm                        
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

    item = () =>{
        return(
            <>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    <img src="" className="img-responsive" alt=""/>

                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h5>Product Name</h5>
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <h5>Product price</h5>
                </div>
            </>
        );
    }
}

export default ShowCartItem;