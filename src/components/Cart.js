import React, { Component } from 'react';

class Cart extends Component{
    render(){
        return(
            <div class="row mt-5 width-90">
                    
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <h3>Điền thông tin nhận hàng</h3>
                    <hr/>
                    <form>
                    
                        <div class="form-group">
                            <input type="text" class="form-control" id="" placeholder="Họ và tên ..."/>
                            <input type="text" class="form-control" id="" placeholder="Số điện thoại ..."/>
                            <input type="text" class="form-control" id="" placeholder="Địa chỉ nhà cụ thể ..."/>
                            <div className="d-flex">
                                <div className='pick-city-district'>
                                    <select
                                        value='Chọn thành phố'
                                    >
                                        <option>Hà Nội</option>
                                        <option>Đà Nẵng</option>
                                        <option>Hồ Chí Minh</option>
                                    </select>
                                </div>
                                <div className='pick-city-district'>
                                    <select
                                        value='Chọn quận huyện'
                                    >
                                        <option>Quốc Oai</option>
                                        <option>....</option>
                                        <option>....</option>
                                    </select>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="" placeholder="Ghi chú cho cửa hàng ..."/>
                        </div>
                    </form>

                    <h3>Phương Thức Thanh Toán</h3>
                    <hr/>      
                    
                    <div class="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                value=""
                                className='checkbox-type mt-0'
                            />
                            Thanh toán khi nhận hàng
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                value=""
                                className='checkbox-type mt-0'
                            />
                            Thanh toán qua thẻ ngân hàng
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                value=""
                                className='checkbox-type mt-0'
                            />
                            Thanh toán qua ví momo
                        </label>
                    </div>
                     
                                        
                </div>
                
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 bg-orange">
                    <h3>Sản Phẩm</h3>
                    <hr/>
                    <form>
                        <div className='d-flex'>
                            <div>
                                <div></div>
                                <div>
                                    <img src='' alt='image'/>
                                </div>
                            </div>
                            <div>
                                <h4>Let's Stay In - Hạt cho mèo Solidgold</h4>
                                <p>199.000đ</p>
                                <p>Cân nặng: 1kg</p>
                                <p>Số lượng: 1</p>
                            </div>
                        </div>
                        <hr/>
                        <label>
                            Mã giảm giá
                            <input 
                                type="text" 
                                name=''
                                placeholder='Nhập mã tại đây'
                            />
                        </label>
                        <hr/>
                        <p>Giá trị sản phẩm <span>199.000đ</span></p>
                        <p>Tiền ship <span>30.000đ</span></p>
                        <p>Giảm giá <span>0đ</span></p>
                        <hr/>
                        <h3>Tính Tổng Tiền <span>229.000đ</span></h3>
                        
                        <button type="submit" class="btn btn-primary">ĐẶT HÀNG<i class="fas fa-arrow-right"></i></button>
                    </form>
                </div>
            
            </div>
        );
    }
}

export default Cart;