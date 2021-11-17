import logo from '../../img/logo.svg'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { patientSideNavLinks } from '../SideNavLinks'
import SideNavCSS from "../../styles/SideNav.module.css"


function SideNav() {
    const [active, setActive] = useState(false)
    const [activeLink, setActiveLink] = useState(false)
    const toggleActive = () => {
        setActive(!active)
    }
    const closeSideNav = () => {
        setActiveLink(!activeLink)
        if(active && window.innerWidth <= 1150) {
            setActive(!active)
        }
    }
    useEffect(() => {
        const navLinks = document.getElementsByClassName('.sideLinkItem')
        console.log(navLinks)
    })

    return (
        <div className= {`${SideNavCSS.sideNav} ${active ? SideNavCSS.active : ""}`}>
            <div className={SideNavCSS.header}>
                <img src={logo} alt='' />
                <h2>MEDITECH</h2>
                    <div className={SideNavCSS.sideNavToggle} onClick={toggleActive}>
                        <i className="fas fa-bars"></i>
                    </div>
            </div>
            <ul className={SideNavCSS.sideNavLinks}>
                {
                    patientSideNavLinks.map((link, index) => (
                        <li onClick={closeSideNav} className={link.extraClass === "logOut" ? SideNavCSS.logOut : SideNavCSS.sideLinkItem} key={index} >
                            <NavLink activeClassName={SideNavCSS.activeNavLink} to= {link.url}>
                                <i className={link.icon}></i>
                                <span>{link.title}</span>
                            </NavLink>
                            <p className={SideNavCSS.toolTip}>{link.title}</p>
                        </li>
                    ))
                }
            </ul>          
        </div>
    )
}


export default SideNav

