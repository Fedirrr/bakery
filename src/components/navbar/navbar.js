// import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import {SidebarData} from './sidebarData'
//
// import './navbar.css'
//
//
// function Navbar (){
//
//     const [sidebar, setSidebar] = useState(false)
//
//     const showSidebar = () => {
//         console.log(123)
//         setSidebar(!sidebar)
//     }
//     return (
//         <>
//             <div className="navbar ">
//                 {/*//d-xl-none d-md-none d-sm-none*/}
//                 <Link to="#" className='menu-bars'>
//                     <FaIcons.FaBars onClick={showSidebar}/>
//                 </Link>
//             </div>
//             <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
//                 {/*d-xl-none d-md-none d-sm-none*/}
//                 <ul className='nav-menu -items '>
//                     <li className='navbar-toggle'>
//                         <Link to='#' className='menu-bars '>
//                             <AiIcons.AiOutlineClose/>
//                         </Link>
//                     </li>
//                     {SidebarData.map(({title, path, cName, name, phoneNumber, href},index) => {
//                         return (
//                             <li key={index} className={cName}>
//                                 <Link to={path}>
//                                     <span>{title}</span>
//                                 </Link>
//                                     <a href={href}>{phoneNumber} </a>
//                                     <span>{name}</span>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//         </>
//     )
// }
// export default Navbar
