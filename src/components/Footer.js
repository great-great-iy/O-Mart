import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Footer.css';

function Footer() {
    return(
        <>
            <footer class="footer">
                <div className='ft-bgr'>
                    <img src='../images/bgr_footer.jpg' alt=''/>
                </div>
                
                <div class="row contact-infor">
                    
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="ft-logo">
                            <Link to='/'><img src="./../images/logo_petmart.png" alt="logo"/></Link>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="cont-col">
                            <h5>Về Pet mart</h5>
                            <Link to='/'>Địa chỉ cửa hàng</Link><br/>
                            <Link to='/'>Hotline hỗ trợ</Link><br/>
                            <Link to='/'>Đăng kí kinh doanh</Link><br/>
                            <Link to='/'>Thông tin Petmart</Link>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="cont-col">
                            <h5>Chính sách</h5>
                            <Link to='/'>Chính sách đổi trả</Link><br/>
                            <Link to='/'>Chính sách giao hàng</Link><br/>
                            <Link to='/'>Chính sách mua hàng</Link><br/>
                            <Link to='/'>Phương thức thanh toán</Link>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="cont-col">
                            <h5>Thông tin khác</h5>
                            <Link to='/'>Tích điểm khách hàng</Link><br/>
                            <Link to='/'>Thông tin tuyển dụng</Link><br/>
                        </div>
                    </div>
                </div>
                <hr/>

                <div class="row width-80">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className='name-company'>
                            <p>© CÔNG TY PET MART VIET NAM / All RIGHT RESERVED</p>
                        </div>
                    </div>
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <label className='follow'>
                            Theo dõi chúng tôi tại: 
                            <ul className='icon'>
                                <li className='icon-ele'><i class="fab fa-facebook-square"></i></li>
                                <li className='icon-ele'><i class="fab fa-pinterest-square"></i></li>
                                <li className='icon-ele'><i class="fab fa-instagram-square"></i></li>
                                <li className='icon-ele'><i class="fab fa-youtube-square"></i></li>
                            </ul>
                        </label>
                    </div>   
                </div>
            </footer>
        </>
    );
}

export default Footer;