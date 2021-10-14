import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Discount = (props) => {
    return (
        <>
            <div className='discount-notice'>
                <h2>{props.discount}</h2>
            </div>      
        </>
    );
}

const ItemsMenu = (props) => {
    return(
        <>
            <div className='items-menu'>
                <Link>{props.items}</Link>
            </div>
             
        </>
    );
}

const Login = () => {
    return (
        <>
            <div className='login'>
                <div>
                    <button>
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </button>
                </div>
                <div>
                    <Link>
                        <img src='' alt='avatar'/>
                        
                    </Link>
                </div>
                <div>
                    <button>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

const Cart = (props) => {
    return(
        <>
            <button>
                Cart ({props.count})
            </button>
        </>
    );
}


const Header = () => {
    return(
        <>
            <Discount discount=' Free shipping worldwide on all orders over $40'/>
            <div className='hd-logo'>
                <div className='logo'>
                    <img src='/' alt='logo'/>
                </div>
            </div>
            <nav className='navbar'>
                <div className='hd-search'>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input
                        className='search'
                        name='search'
                        type='search'
                        placeholder='Search...'
                    />
                </div>
                <div className='nav-menu'>
                    <ItemsMenu items='Home'/>
                    <ItemsMenu items='Shop'/>
                    <ItemsMenu items='About'/>
                    <ItemsMenu items='Blog'/>
                    <ItemsMenu items='Contact'/>
                </div>
                
                <div>
                    <Login/>
                </div>

                <div>
                    <Cart count='100'/>
                </div>
            </nav>
        </>
    );
}

export default Header;