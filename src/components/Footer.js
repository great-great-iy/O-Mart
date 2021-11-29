import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Footer.css';

function Footer() {
    return(
        <>
            <footer class="footer">
                <div className='ft-bgr-1'>
                    <div className='ft-img-1'><img src='./../images/ft_dogfoot_1.png' alt=''/></div>
                    <div className='ft-img-2'><img src='./../images/ft_dogfoot_2.png' alt=''/></div>
                </div>
                <div class="contact-infor">
                    <div class="cont-row">
                        <div class="cont-col">
                            <Link to='/'><img src="./../images/logo_petmart.png" alt="logo"/></Link>
                        </div>
                        <div class="cont-col">
                            <h5>Về Pet mart</h5>
                            <Link to='/'>Địa chỉ cửa hàng</Link><br/>
                            <Link to='/'>Hotline hỗ trợ</Link><br/>
                            <Link to='/'>Đăng kí kinh doanh</Link><br/>
                            <Link to='/'>Thông tin Choangmart</Link>
                        </div>
                        <div class="cont-col">
                            <h5>Chính sách</h5>
                            <Link to='/'>Chính sách đổi trả</Link><br/>
                            <Link to='/'>Chính sách giao hàng</Link><br/>
                            <Link to='/'>Chính sách mua hàng</Link><br/>
                            <Link to='/'>Phương thức thanh toán</Link>
                        </div>
                        <div class="cont-col">
                            <h5>Thông tin khác</h5>
                            <Link to='/'>Tích điểm khách hàng</Link><br/>
                            <Link to='/'>Thông tin tuyển dụng</Link><br/>
                        </div>
                    </div>
                    <div class="our-cont">
                        <div class="line"></div>
                        <div class="footer">
                            <div class="our-name">
                                <p>© CÔNG TY PET MART VIET NAM / All RIGHT RESERVED</p>
                            </div>
                            <div class="follow">
                                <span>Theo dõi chúng tôi tại</span>
                                <i class="fa fa-facebook-f"></i>
                                <i class="fa fa-pinterest-p"></i>
                                <i class="fa fa-instagram"></i>
                                <i class="fa fa-youtube-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;