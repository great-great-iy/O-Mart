import React, { Component } from 'react';

class SortProduct extends Component {
    render() {
        return(
            <>
                <div className="dropdown">                                    
                    <button 
                        className="btn btn-primary dropdown-toggle btn-sort" 
                        type="button" 
                        id="dropdownSortMenu" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="true">
                        Sắp xếp theo 
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownSortMenu">
                        <li 
                            // onClick = { () => this.onClick('name', '1')}
                        >
                            <a role="button">
                                <span>
                                    Giá: Thấp đến Cao
                                </span>
                            </a>
                        </li>
                        <li 
                            // onClick = { () => this.onClick('name', '-1')}
                        >
                            <a role="button">
                                <span>
                                    Giá: Cao đến Thấp
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li 
                            // onClick = { () => this.onClick('status', '1')}
                        >
                            <a role="button">
                                Bán Chạy
                            </a>
                        </li>
                        <li 
                            // onClick = { () => this.onClick('status', '-1')}
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
}

export default SortProduct;