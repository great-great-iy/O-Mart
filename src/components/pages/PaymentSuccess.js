import React, { Component } from 'react';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import './../../css/Cart.css';


class PaymentSuccess extends Component{
    render(){
        return(
            <>
                <Banner banner = 'cm-payment-banner'/>
                <div>
                    <div>
                        <p>Giỏ hàng {'>'} <span>Trang Checkout</span> {'>'} <span>Đặt hàng thành công</span> </p>
                    </div>
                    <h2>Đặt Hàng Thành Công</h2>
                </div>
                
                <div class="row">
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div>                            
                        </div>
                        <div>
                            <img src='' alt=''/>
                        </div>
                    </div>
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <h3>Cảm ơn bạn đã mua hàng tại Pet mart</h3>
                        <p>Đơn hàng đã được đặt thành công và sẽ sớm gửi tới bạn trong vài ngày tới</p>
                        <ul className='d-flex none-type'>
                            <li><Link to='/' className='text-decoration-none'>TRỞ LẠI MUA SẮM</Link></li>
                            <li><Link to='/' className='text-decoration-none'>TRANG CHỦ</Link></li>
                        </ul>
                    </div>
                    
                    
                    
                </div>
                

                
            </>
        );
    }
}

export default PaymentSuccess;