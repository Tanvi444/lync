import React from 'react'
import './sass/auctionbox.scss'
import logo from "./images/logo.PNG"    
const AuctionBox = () => {
    return (
        <div className='discborder border-gradient discbox'>
            <div className='auctioncircles '>
            <img className='auction_circles border-gradient ' src={logo} />
            <img className='auction_circles border-gradient ml1' src={logo} />
            <img className='auction_circles border-gradient ml2' src={logo} />
            <p>John Kosta</p>
            </div>
        <div className='image_cont'>
         <div className='discimg'><img className='disc_image' src={logo} /></div>
         <div className='likes'>
         <i class="fa fa-heart-o" aria-hidden="true"></i>
         <p>1.2k</p>
         </div>
        </div>

        <div>
            <p className='disc_content'>Walking on air</p>
            <div className='flex'>
                <div className='eye'>
                <i class="fa fa-eye" aria-hidden="true"></i>
                <p>View History</p>
                </div>
                <p>11in Stock</p>
            </div>
            <div className='end_box'>
            <i class="fa fa-btc" aria-hidden="true"></i>
            <p>0.31 BTC 1/12</p>
            </div>
        </div>
        </div>
    )
}
export default AuctionBox;