import React from 'react';
import { Component } from 'react';
import './../css/Product.css';
import Product from './Product';

class ProductDetail extends Component{
    render(){
        var { product } = this.props;
        return(
            <section>
                
                <div className="row mt-5 width-90">
                    
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className='image-product-small'>
                                <div className='bgd-image'>
                                </div>
                                <div className='item-img'>
                                    <img src='./../images/product-6_1.png'/>
                                </div>
                                
                            </div>
                            <div className='image-product-small mt-5'>
                                <div className='bgd-image'>
                                </div>
                                <div className='item-img'>
                                    <img src='./../images/product-6_2.png'/>
                                </div>
                                
                            </div>
                            <div className='image-product-small mt-5'>
                                <div className='bgd-image'>
                                </div>
                                <div className='item-img'>
                                    <img src='./../images/product-6_3.png'/>
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className='image-product-big'>
                                <div className='bgd-image'>
                                </div>
                                <div className='item-image'>
                                    <img src='./../images/product-6.png'/>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className=''>
                            <h3>Product Name</h3>
                            <p className='color-text'>199.000<span>đ</span>-399.000<span>đ</span></p>
                        </div>
                        <hr/>
                        <div>
                            
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-0">
                                <p>Thương hiệu: Solidgold</p>
                                <div className='judge-5stars'>
                                    {/* {this.Ratting(product.rating)} */}
                                </div>
                            </div>
                            
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <img/>
                            </div>
                            
                        </div>
                        
                        <div>
                            
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
                                <p>Mô tả : Thức ăn hạt cho mèo Let’s stay in được làm từ thịt gà tươi ngon, chỉ sử dụng nguồn nguyên liệu hữu cơ sạch, an toàn, cung cấp đầy đủ dinh dưỡng cho thú cưng phát triển khỏe mạnh. Được chế biến từ 100% thịt thật dành cho mọi lứa tuổi</p>
                            </div>
                            
                        </div>
                        <div>
                            <label className='mr-4'>Cân nặng</label>
                            <div className="btn-group">
                                <select 
                                    name = "filterStatus"
                                    value = ''
                                    onChange = { this.onChange }
                                    className="form-control select-weight"
                                >
                                    <option value='1'>1kg</option>
                                    <option value='3'>3kg</option>
                                    <option value='5'>5kg</option>
                                </select>
                                <i class="fas fa-chevron-down "></i>
                            </div>
                        </div>
                        <div>
                                              
                            <label className='mr-4'>Số lượng</label>
                            
                            <span>
                            <button type="button" class="btn btn-primary btn-add-sub"><i class="fas fa-minus"></i></button>
                            <span className='show-quantity mr-5 ml-5'>5</span>
                            <button type="button" class="btn btn-primary btn-add-sub"><i class="fas fa-plus"></i></button>                            
                            </span>
                                            
                        </div>
                        <div className='add-to-cart'>
                            
                            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 p-0">
                                <button 
                                    type="button" 
                                    class="btn btn-info mt-3 btn-add-product" 
                                    // onClick = {() => this.onAddToCart(product)} 
                                ><i class="fas fa-cart-plus mr-3"></i>THÊM VÀO GIỎ HÀNG</button>
                            </div>
                                
                            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                
                                <button type="button" class="btn btn-primary mt-3 btn-like">
                                    <i class="far fa-heart mr-2"></i>
                                    YÊU THÍCH    
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>

                
                <div class="mt-5 width-80">
                    <div>
                        <div className='text-description-product'>
                            <dic className='text'>
                                Thành Phẩm Dinh Dưỡng
                            </dic>
                            <div className='icon'>
                                <i class="fas fa-chevron-down "></i>
                            </div>
                            
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className='text-description-product'>
                            <dic className='text'>
                                Lợi Ích Chính
                            </dic>
                            <div className='icon'>
                                <i class="fas fa-chevron-down "></i>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className='text-description-product'>
                            <dic className='text'>
                                Hướng Dẫn Cho Ăn
                            </dic>
                            <div className='icon'>
                                <i class="fas fa-chevron-down "></i>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className='raiting mt-5 width-80'>
                    <div className='raiting-lable mb-3'>
                        <h5>Đánh Giá (0)</h5>
                    </div>
                    <hr/>
                    <div className='raiting-star mt-3'>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>

                    <div class="input-text">
                        <input
                            className = 'input-command'
                            placeholder = 'Viết bình luận...'
                        />
                    </div>
                    
                </div>
                
                <div className='same-product'>
                    <h3>Sản phẩm tương tự</h3>
                    
                    <div class="row width-80">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-3 mb-3">
                            <div class="pr-col">
                                <div class="pr-col-item">
                                    <div class="pr-item">
                
                                    </div>
                                    <div class="item-img">
                                        <a href='/productDetail'><img src='' alt='{product.name}'/></a>
                                    </div>
                                </div>
                                <div className="pr-lable">
                                    <div class="pr-txt">
                                        <h4>product.name</h4>
                                        <p>product.price<span>đ</span></p>
                                    </div>
                                    <div className='judge-5stars'>
                                        {/* {this.Ratting(product.rating)} */}
                                    </div>
                                    
                                    <button 
                                        type="button" 
                                        class="btn btn-info mt-3 btn-AddProduct" 
                                        // onClick = {() => this.onAddToCart(product)} 
                                    ><i class="fas fa-cart-plus mr-3"></i>THÊM VÀO GIỎ HÀNG</button>
                                </div>
                            
                            </div>  
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-3 mb-3">
                            <div class="pr-col">
                                <div class="pr-col-item">
                                    <div class="pr-item">
                
                                    </div>
                                    <div class="item-img">
                                        <a href='/productDetail'><img src='' alt='{product.name}'/></a>
                                    </div>
                                </div>
                                <div className="pr-lable">
                                    <div class="pr-txt">
                                        <h4>product.name</h4>
                                        <p>product.price<span>đ</span></p>
                                    </div>
                                    <div className='judge-5stars'>
                                        {/* {this.Ratting(product.rating)} */}
                                    </div>
                                    
                                    <button 
                                        type="button" 
                                        class="btn btn-info mt-3 btn-AddProduct" 
                                        // onClick = {() => this.onAddToCart(product)} 
                                    ><i class="fas fa-cart-plus mr-3"></i>THÊM VÀO GIỎ HÀNG</button>
                                </div>
                            
                            </div>  
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-3 mb-3">
                            <div class="pr-col">
                                <div class="pr-col-item">
                                    <div class="pr-item">
                
                                    </div>
                                    <div class="item-img">
                                        <a href='/productDetail'><img src='' alt='{product.name}'/></a>
                                    </div>
                                </div>
                                <div className="pr-lable">
                                    <div class="pr-txt">
                                        <h4>product.name</h4>
                                        <p>product.price<span>đ</span></p>
                                    </div>
                                    <div className='judge-5stars'>
                                        {/* {this.Ratting(product.rating)} */}
                                    </div>
                                    
                                    <button 
                                        type="button" 
                                        class="btn btn-info mt-3 btn-AddProduct" 
                                        // onClick = {() => this.onAddToCart(product)} 
                                    ><i class="fas fa-cart-plus mr-3"></i>THÊM VÀO GIỎ HÀNG</button>
                                </div>
                            
                            </div>  
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-3 mb-3">
                            <div class="pr-col">
                                <div class="pr-col-item">
                                    <div class="pr-item">
                
                                    </div>
                                    <div class="item-img">
                                        <a href='/productDetail'><img src='' alt='{product.name}'/></a>
                                    </div>
                                </div>
                                <div className="pr-lable">
                                    <div class="pr-txt">
                                        <h4>product.name</h4>
                                        <p>product.price<span>đ</span></p>
                                    </div>
                                    <div className='judge-5stars'>
                                        {/* {this.Ratting(product.rating)} */}
                                    </div>
                                    
                                    <button 
                                        type="button" 
                                        class="btn btn-info mt-3 btn-AddProduct" 
                                        // onClick = {() => this.onAddToCart(product)} 
                                    ><i class="fas fa-cart-plus mr-3"></i>THÊM VÀO GIỎ HÀNG</button>
                                </div>
                            
                            </div>  
                        </div> 
                    </div>

                    <div className='icon'>
                        <i class="fas fa-circle"></i>
                        <i class="fas fa-circle opacity-icon"></i>
                        <i class="fas fa-circle opacity-icon"></i>
                    </div>
                </div>                
            </section>
        );
    }
}

export default ProductDetail;