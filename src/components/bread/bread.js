import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {allBread} from "../_mockData/bread";
import {Container, Row, Col} from 'react-bootstrap'

import './bread.css'


class Bread extends Component {
    render() {
        return (

            <div className="good-container">
                <Container fluid={true}>
                    <Row className='justify-content-center'>
                        <Col xl={10} lg={12} md={12} sm={12} xs={12}>
                            <ul className="catalog-items">
                                {allBread.map(({type, image, description, name, price}, index) => {
                                    return (
                                        <li className="li-catalog-item"
                                            key={index}>
                                            <Link to={`/${type}/${name}`}>
                                                <div className="image-container">
                                                    <img className='good-image' src={image} alt={name}/>
                                                </div>
                                                <div className="good-info">
                                                    <span className="good-name">{name}</span>
                                                    <span className="good-description">{description}</span>
                                                    <span className="good-price">{price}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>


        );
    }
}

export default Bread;
