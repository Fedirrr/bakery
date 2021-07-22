import React, {Component} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Header from "../header";
import Footer from "../footer/footer";
import Buns from "../buns/buns";
import Puffs from "../Puffs/puffs";
import GoodDetails from "../goodDetails/goodDetails";
import Bread from "../bread/bread";
import MainPage from "../main-page/main-page";
import OurProduct from "../our-product/our-product";
import About from "../about/about"
import Navbar from '../header/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Navigation from "../navigation/navigation";


export default class App extends Component {


    render() {
        return (
            <Router>
                <div className="main-container">
                    <Navbar/>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/bread" component={Bread}/>
                        <Route exact path="/buns" component={Buns}/>
                        <Route exact path="/ourProduct" component={OurProduct}/>
                        <Route exact path="/puffs" component={Puffs}/>
                        <Route exact path="/bread/:name" component={GoodDetails}/>
                        <Route exact path="/buns/:name" component={GoodDetails}/>
                        <Route exact path="/puffs/:name" component={GoodDetails}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
