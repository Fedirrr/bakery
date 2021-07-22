import React from 'react'
import './footer.css'
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {

    const handleScroll = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (

        <div className='container footer d-none d-sm-block'>
            <Container>
                <Row>
                    <Col>
                        <div className="footerItems">
                            <div className="item">
                                <ul>
                                    <h6>Каталог</h6>

                                    <Link to='/bread'>
                                        <li className='li-footer' onClick={handleScroll}>Хліб</li>
                                    </Link>

                                    <Link to='/buns'>
                                        <li className='li-footer' onClick={handleScroll}>Булочки</li>
                                    </Link>
                                    <Link to='/puffs'>
                                        <li className='li-footer' onClick={handleScroll}>Слойки та піца</li>
                                    </Link>

                                </ul>
                            </div>

                            <div className="item">
                                <ul>
                                    <h6>Клієнтам</h6>
                                    <Link to='/ourProduct'>
                                        <li className='li-footer'>Наша продукція</li>
                                    </Link>
                                    <Link to='/about'>
                                        <li className='li-footer'>Про нас</li>
                                    </Link>
                                    <Link to='/contact'>
                                        <li className='li-footer'>Контакти</li>
                                    </Link>
                                </ul>

                                <h6>Ми в соцмережах</h6>
                                <ul className='social'>
                                    <li>
                                        <a rel="noreferrer"
                                           href="https://www.facebook.com/profile.php?id=100050636793499"
                                           target="_blank"><i className="fab fa-facebook fb-color"></i></a>
                                    </li>
                                </ul>

                            </div>
                            <div className="item">
                                <ul>
                                    <h6>Контактна інформація</h6>
                                    <li><a className='contactc' href="tel:+380509715457">+380509715457</a></li>
                                    <li><a className='contactc' href="tel:+380978715457">+380978715457</a></li>
                                    <li>
                                        <a className='contactc' href="mailto:fedyapavlyshynets@gmail.com">
                                            <i className="far fa-envelope"></i>
                                            fedyapavlyshynets@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fas fa-map-marker-alt">
                                            <span>вул. Спортивна</span>
                                        </i>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://www.google.com/search?q=%D0%B2%D1%83%D0%BB+%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D0%B2%D0%BD%D0%B0+%D0%BF%D1%96%D0%B4%D0%B2%D0%B8%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%96%D0%B2&rlz=1C1CHZN_ruUA944UA944&biw=1920&bih=947&tbm=lcl&sxsrf=ALeKk03UiuM2RPSSROS3049Z_kTXfSN0qA%3A1622892700377&ei=nGC7YJy2FsyC9u8PhZevsAg&oq=%D0%B2%D1%83%D0%BB+%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D0%B2%D0%BD%D0%B0+%D0%BF%D1%96%D0%B4%D0%B2%D0%B8%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%96%D0%B2&gs_l=psy-ab.12...30341.34224.0.37456.16.15.1.0.0.0.118.1573.3j12.15.0....0...1c.1.64.psy-ab..0.2.224...0i19k1j0i13i30i19k1.0.g0Xj0mxKFzs#rlfi=hd:;si:;mv:[[48.1397305658971,22.971793083631216],[48.136680516865034,22.963746456586538],null,[48.1382055640312,22.967769770108877],18]"
                                        >
                                            Мапа проїзду
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Footer
