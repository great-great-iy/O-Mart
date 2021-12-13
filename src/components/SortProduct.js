import React, { Component } from 'react';
import './../css/Product.css';

class SortProduct extends Component {
    render() {
        return(
            <>
                <div className="dropdown">                                    
                    <button 
                        className="btn dropdown-toggle btn-sort" 
                        type="button" 
                        id="dropdownSortMenu" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="true">
                        Sắp xếp theo 
                    </button>
                    <ul className="dropdown-menu sort-menu" aria-labelledby="dropdownSortMenu">
                        <li 
                            onClick = { () => this.onClick('price', '1')}
                        >
                            <a role="button">
                                <span>
                                    Giá: Thấp đến Cao
                                </span>
                                <i class="fas fa-check"></i>
                            </a>
                        </li>
                        <li 
                            onClick = { () => this.onClick('price', '-1')}
                        >
                            <a role="button">
                                <span>
                                    Giá: Cao đến Thấp
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li 
                            onClick = { () => this.onClick('flash sale', '1')}
                        >
                            <a role="button">
                                Bán Chạy
                            </a>
                        </li>
                        <li 
                            onClick = { () => this.onClick('new product', '1')}
                        >
                            <a role="button">
                                Mới nhất
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
    onClick = (sortBy, sortValue) => {
        this.props.onSortProduct({ 
            by : sortBy,
            value : sortValue
        });
    }
}

export default SortProduct;