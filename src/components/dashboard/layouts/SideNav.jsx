import logo from '../../img/logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { patientSideNavLinks } from '../SideNavLinks'

function SideNav() {
    return (
        <div className='side-nav'>
            <div className="header">
                <img src={logo} alt='' />
                <h2>MEDITECH</h2>
            </div>
            <ul className='side-nav-links'>
                {
                    patientSideNavLinks.map(link => (
                        <li className={link.extraClass} >
                            <Link to= {link.url}>
                                <i className={link.icon}></i>
                                <span>{link.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>           
        </div>
    )
}

export default SideNav
