import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Items.css';

const Items = (props) => {

    return (
        <>
            <div class="pr-col">
                <div class="pr-col-item">
                    <div class="pr-item">

                    </div>
                    <div class="item-img">
                        <Link to='/'><img src={props.img} alt='Product'/></Link>
                    </div>
                </div>
                <div className="pr-lable">
                    <div class="pr-txt">
                        <h4>{props.productName}</h4>
                        <p>{props.price}<span>đ</span></p>
                    </div>
                    <div className='judge-5stars'>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-info mt-3 btn-AddProduct"  
                    ><i class="fas fa-cart-plus mr-3"></i>THÊM VÀO GIỎ HÀNG</button>
                </div>
              
            </div>        
        </>
    );
};

export default Items;
