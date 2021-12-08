import React from 'react';
import './../css/Banner.css';
import Search from './Search';

function Banner(props) {

    return (
        <>
            <div className={props.banner}>
                <div className="banner-content">    
                    <Search/>
                </div>
            </div>
              
        </>
    );
}

export default Banner;