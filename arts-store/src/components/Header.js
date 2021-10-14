import React from 'react';
import { Link } from 'react-router-dom';


const Discount = () => {
    return (
        <>
            <div className='discount-notice'>
                <h2>Free shipping worldwide on all orders over $40</h2>
            </div>      
        </>
    );
}

const Header = () => {
    return(
        <>
            <Discount/>
            <div>

            </div>
        </>
    );
}

export default Header;