import React, { useState } from 'react'
import "./Navbar.css";
import { FaBars } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
// import AiOutlineClose from "react-icons/ai"
import { Link } from 'react-router-dom'
import { Sidebardata } from './Sidebardata'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(true);

    return (
        <>
            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar} /> All</Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <span>
                            <BsPersonCircle /> Hello, Sign in
                        </span>
                    </li>
                    {Sidebardata.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to="item.path">
                                    <span>{item.list.li1}</span>
                                    <span>{item.list.li2}</span>
                                    <span>{item.list.li3}</span>
                                    <span>{item.list.li4}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar

