import React, {Component} from "react";
import { Link } from "react-router-dom";

import './navigation.css'

export default class Navigation extends Component {

    render() {
        return(
            <span className='d-none d-sm-block'>
                <ul className='navMenu'>
                    <li className='nav-li'>
                        <Link to="/bread" className='menu-link'>Хліб</Link>
                    </li>
                    <li className='nav-li'>
                        <Link to="/buns" className='menu-link'>Булочки</Link>
                    </li>
                    <li className='nav-li'>
                        <Link to="/puffs" className='menu-link'>Слойки та піца</Link>
                    </li>
                </ul>
            </span>
        )
    }
}
