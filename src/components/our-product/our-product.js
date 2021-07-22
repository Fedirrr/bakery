import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ourProduct} from "../_mockData/our-product";

import './our-product.css'


class OurProduct extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <ul className="catalog-items">
                        {ourProduct.map(({type, name, image, description}, index) => {
                            return (
                                <Link to={`/${type}`} key={index}>
                                    <li className="li-catalog-item">
                                        <div className="image-container">
                                            <img className='good-image' src={image} alt={name}/>
                                        </div>
                                        <div className="good-info">
                                            <span className="good-name">{name}</span>
                                            <span className="good-description">{description}</span>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default OurProduct;
