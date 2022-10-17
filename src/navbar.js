import React from 'react'
import './sass/navbar.scss'
import logo from "./images/logo.PNG"
const Navbar = () => {
    return (
        <div className='nav_main'>
            <div className='part_1'>
                <div><img className='logo' src={logo} /></div>
                <div> <p>Axies</p></div>
            </div>
            <div className='part_2'>
                <p>Discover</p>
                <p>Feature</p>
                <p>Market</p>
                <p>Activity</p>
            </div>
            <div className='part_2'>
                <button className="border-gradient">Sign in</button>
                <button className="border-gradient">Create</button>

            </div>
        </div>
    )
}
export default Navbar;