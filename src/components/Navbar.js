import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './../css/Navbar.css';
import ShowCart from './ShowCart';

class Navbar extends Component{

    render () {
        return (
            <>
                <nav className='cm-nav'>
                    <div className="cm-nav-content">
                        <ul className="cm-nav-header">
                            <li className="cm-nav-item cm-nav-menuicon"><i className="fa fa-bars"></i></li>
                            <li className="cm-nav-item cm-nav-logo">
                                <Link to='/'><img src='images/logo_petmart.png' alt="Choang Mart"/></Link></li>
                            <li className="cm-nav-item cm-nav-bag mc-nav-bag-small">
                                <Link to='/' className="cm-nav-link cm-nav-link-bag"><i class="fas fa-cart-arrow-down"></i></Link></li>   
                        </ul>

                        <div></div>
                        
                        <ul className="cm-nav-list">
                            <li className="cm-nav-item cm-nav-item-menu">
                                <Link to='/'>
                                    <img src="images/logo_petmart.png" alt=""/></Link></li>
                            <li className="cm-nav-item cm-nav-item-menu">
                                <Link 
                                    to='/introduce' 
                                    className='cm-nav-link'
                                >GIỚI THIỆU</Link></li>
                            <li className="cm-nav-item cm-nav-item-menu">
                                <Link to='/' 
                                className='cm-nav-link' 
                            >DỊCH VỤ <i className='fas fa-chevron-down'></i></Link></li>
                            <li className="cm-nav-item cm-nav-item-menu">
                                <div className='buy-sell'>
                                    <Link 
                                        to='/' 
                                        className='cm-nav-link'
                                    >MUA SẮM <i className='fas fa-chevron-down'></i></Link>
                                    <div className='menu-buy-sell'>
                                        {/* Cat */}
                                        <div className='menu-bs-cat'>
                                            <Link to='/' className='menu-bs-link'>Mèo Cảnh <i className="fas fa-paw"></i></Link>
                                        </div>
                                        {/* Dog */}
                                        <div className='menu-bs-dog'>
                                            <Link to='/' className='menu-bs-link'>Chó Cảnh <i className="fas fa-bone"></i></Link>
                                        </div>
                                        {/* Fish */}
                                        <div className='menu-bs-fish'>
                                            <Link to='/' className='menu-bs-link'>Cá Cảnh <i className="fas fa-fish"></i></Link>
                                        </div>
                                    </div>  
                                </div></li>
                            <li className="cm-nav-item cm-nav-item-menu">
                                <Link 
                                    to='/' 
                                    className='cm-nav-link'
                                >TẠP CHÍ <i className='fas fa-chevron-down'></i></Link></li>
                            <ul className="cm-nav-list">
                                <li className="cm-nav-item cm-nav-item-menu">                                 
                                    <Link to='/' className="cm-nav-link"><span className="icon"><i class="fas fa-search"></i></span></Link></li>
                                <li className="cm-nav-item cm-nav-item-menu">    
                                    <div className='cart'>
                                        <div>
                                            <Link to='/payment' className="cm-nav-link">
                                                <span className="icon"><i class="fas fa-cart-arrow-down"></i></span>
                                            </Link>
                                        </div>
                                        <div className='show-cart'>
                                            {/* product in cart*/}
                                            <ShowCart/>
                                      
                                        </div>
                                    </div>
                                </li>
                                <li className="cm-nav-item cm-nav-item-menu">
                                    <Link to='/' className="cm-nav-link"><span className="icon"><i class="fas fa-user"></i></span></Link></li>
                            </ul>
                        </ul>
                    </div>
                </nav> 
            </>
        )
    }

}

export default Navbar;

