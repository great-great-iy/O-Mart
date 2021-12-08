import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cart extends Component{
    render(){
        return(
            <div class="row mt-5 width-90 payment">
                    
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <h3>Điền thông tin nhận hàng</h3>
                    <hr/>
                    <form>
                    
                        <div class="form-group">
                            <input type="text" class="form-control input-infor" id="" placeholder="Họ và tên ..."/>
                            <input 
                                type="tel" 
                                class="form-control input-infor" 
                                id=""
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="Số điện thoại ..."/>
                            <input type="text" class="form-control input-infor" id="" placeholder="Địa chỉ nhà cụ thể ..."/>
                            <div className="d-flex">
                                <div className='pick-area'>
                                    <select
                                        className='pick-city-district mr-4'
                                        value=''
                                    >
                                        <option value='Hanoi'>Hà Nội</option>
                                        <option value='Danang'>Đà Nẵng</option>
                                        <option value='Hcm'>Hồ Chí Minh</option>
                                    </select>
                                </div>
                                <div className='pick-area'>
                                    <select
                                        className='pick-city-district ml-4'
                                        value='Chọn quận huyện'
                                    >
                                        <option>Quốc Oai</option>
                                        <option>....</option>
                                        <option>....</option>
                                    </select>
                                </div>
                            </div>
                            
                            <textarea name="" id="input" class="form-control input-infor pt-3 pl-3 bor" rows="4" placeholder="Ghi chú cho cửa hàng ..."></textarea>
                            
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
                        <div>
                            <label className='pt-2 font-text'>
                                <span>Mã giảm giá</span>
                                <input 
                                    className='input-voucher ml-5'
                                    type="text" 
                                    name=''
                                    placeholder='Nhập mã tại đây'
                                />
                            </label>
                            <hr/>
                            <div className='pt-3'>
                                <p className='font-text'>Giá trị sản phẩm <span>199.000đ</span></p>
                                <p className='font-text'>Tiền ship <span>30.000đ</span></p>
                                <p className='font-text'>Giảm giá <span>0đ</span></p>
                            </div>
                            <hr/>
                            <p className='pt-3 font-text'>Tính Tổng Tiền <span>229.000đ</span></p>
                        </div>             
                        
                        <button type="submit" class="btn btn-primary"><Link to='/ordersuccess'>ĐẶT HÀNG<i class="fas fa-arrow-right"></i></Link></button>
                    </form>
                </div>
            
            </div>
        );
    }
}

export default Cart;