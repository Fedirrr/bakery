import React, {useEffect, useState} from 'react';
import {allBuns} from '../_mockData/buns';
import {allBread} from '../_mockData/bread';
import {allPuffs} from "../_mockData/puffs";
import {Container, Row, Col} from 'react-bootstrap'

import './goodDetails.css'


const GoodDetails = (props) => {
    const [goodDetail, setGoodDetail] = useState(null);
    const path = props.match.path

    useEffect(() => {
        if (path.includes('bread')) {
            const findBread = allBread.find((bread) => bread.name === props.match.params.name);
            setGoodDetail(findBread);

        }
        if (path.includes('buns')) {
            const findBun = allBuns.find((bun) => bun.name === props.match.params.name);
            setGoodDetail(findBun);
        }
        if (path.includes('puffs')) {
            const findBun = allPuffs.find((puff) => puff.name === props.match.params.name);
            setGoodDetail(findBun);
        }
    }, [props.match.params.name, path])

    return (
        <>
            {!goodDetail && <span>Good is not defined.</span>}
            {goodDetail && <div>
                <Container fluid={true}>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="itemBreads">
                                <div className="breadSlider">
                                    <img src={goodDetail.image} alt="buns"/>
                                </div>
                                <div className="features">
                                    <h4>Характеристики</h4>
                                    <span className='featuresItem'>Склад</span>
                                    <p>
                                        {goodDetail.about}
                                    </p>
                                    <span className='featuresItem'>Умови зберігання</span>
                                    <p>
                                        Готовий продукт - при температурі від +5 до +7 градусів Цельсія;
                                        Заморожений продукт - при температурі від -15 до -21 градусів Цельсія;
                                    </p>
                                    <span className='featuresItem'>Строк придатності</span>
                                    <p>
                                        Готовий продукт - до 3 суток, при соблюдении условий хранения;
                                        Заморожений продукт - до 90 діб, при дотриманні умов зберігання;
                                    </p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>}
        </>
    );
}

export default GoodDetails;
