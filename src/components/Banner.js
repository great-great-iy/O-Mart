import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Banner.css';

function Banner(props) {

    return (
        <>
            <div className={props.banner}>
                <div className="cm-hd-txt-banner">
                </div>
            </div>
              
        </>
    );
}

export default Banner;