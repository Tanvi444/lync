import React from 'react'
import '../sass/discoverbox.scss'
import logo from "../images/logo.PNG"    
const DiscoverBox = (props) => {
    return (
        <div className='border-gradient discbox'>
         <div className='discimg'><img className='disc_image' src={props.img} /></div>
         <div className='discimg '><img className='circular_image border-gradient borderwhite' src={props.imagec} /></div>
         <div className='names'>
            <p className='names1'>{props.title}</p>
            <p>{props.erc}</p>
         </div>
        </div>
    )
}
export default DiscoverBox;