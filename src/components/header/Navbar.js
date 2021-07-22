import React, {useState} from "react";
import {Link} from "react-router-dom";
import {SidebarData} from './sidebarData'
import './Navbar.css'
// import {Container, Row, Col} from 'react-bootstrap'
import logo from '../../img/kolobkLogo.png'

const Navbar = () => {
    const [click, setclick] = useState(false)

    const handleClick = () => setclick(!click)

    const closeMobileMenu = () => setclick(false)

    return (
        <>

            <nav className='nav-bar '>
                <Link to="/">
                    <i className="fas fa-home "></i>
                </Link>
                <Link to='/' className=''>
                    <span className='navbar-logo'>
                        <img className='logoImg' src={logo} alt=""/>
                    </span>
                </Link>
                <ul className='header-contact'>
                    <li className='number'>
                        <a href="tel:+380509715457">
                            +380509715457 - Юрій
                        </a>

                    </li>
                    <li className='number'>
                        <a href="tel:+380669071727">
                            +380669071727 - Тімея
                        </a>
                    </li>
                </ul>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars '}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                    {SidebarData.map(({title, path, name, href, phoneNumber, icon, target}, index) => {
                        return (
                            <li className='nav-item' key={index}>
                                {   path ? (
                                    <Link to={path} onClick={closeMobileMenu}>
                                        <span>{title}</span>
                                    </Link>
                                ) : (
                                    <span>{title}</span>
                                )}
                                <a href={href}>{phoneNumber}</a>
                                <span> {name}</span>
                                <a href={href} target={target}>
                                    <i className={icon}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
