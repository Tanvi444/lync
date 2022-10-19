import React from 'react'
import './sass/discoverbox.scss'
import logo from "./images/logo.PNG"    
const DiscoverBox = () => {
    return (
        <div className='border-gradient discbox'>
         <div className='discimg'><img className='disc_image' src={logo} /></div>
         <div className='discimg '><img className='circular_image border-gradient' src={logo} /></div>
         <div className='names'>
            <p className='names1'>Absteraction</p>
            <p>ERC-132</p>
         </div>
        </div>
    )
}
export default DiscoverBox;