import React, {Component} from "react";
import Carousel from "../carousel/carousel";
import AboutBakery from "../about-bakery/about-bakery";
import bread1 from '../../img/sliderImg/1.png'
import bread2 from '../../img/sliderImg/2.png'
import bread3 from '../../img/sliderImg/3.png'
import bread4 from '../../img/sliderImg/4.png'
import bread5 from '../../img/sliderImg/5.png'
import bread6 from '../../img/sliderImg/6.png'
import bread7 from '../../img/sliderImg/7.png'

import video from '../../img/video.webm'
import logo from '../../img/Логотип.png'
import './main-page.css'

export default class MainPage extends Component {


    render() {
        return (
            <div className="main">
                {/*<Carousel images={[bread1, bread2]}/>*/}
                    <video preload='metadata' muted={true} className='video' poster={logo} controls={true} loop={true} autoPlay={true}>
                        <source src={video} type='video/webm'/>
                    </video>
                <AboutBakery/>
                <Carousel images={[bread1,bread2,bread3,bread4,bread5,bread6,bread7]} lol={1}/>
            </div>
        )
    }
}


