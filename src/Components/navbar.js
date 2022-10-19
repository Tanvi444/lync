import React, { useState } from 'react'  
import '../sass/navbar.scss'  
import logo from "../images/logo.PNG"  
const Navbar = () => {  
 
 
 
    const [toggle, setToggle] = useState(0) 
 
 
    const clicktoggle= ()=>{ 
        setToggle(!toggle) 
    } 
    return (  
        <div className='nav_main'>  
            <div className='part_1'>  
                <div> 
                    <img className='logo' src={logo} /></div>  
                <div><p className='logo_name'>Axies</p></div>  
            </div>  
            <div className={toggle==0?'none-display part_2':'part_2 after-toggle-navbar'}>  
                <p>Discover</p>  
                <p>Feature</p>  
                <p>Market</p>  
                <p>Activity</p>  
            </div>  
            <div className='part_2'>  
                <button className="border-gradient">Sign in</button>  
                <button className="border-gradient">Create</button>  
  
            </div>  
            <i className="fa fa-bars" aria-hidden="true" onClick={clicktoggle} ></i> 
        </div>  
    )  
}  
export default Navbar;