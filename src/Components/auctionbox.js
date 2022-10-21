import React from 'react'
import '../sass/auctionbox.scss'
const AuctionBox = (props) => {
    return (
        <div className='discborder border-gradient auctionbox'>
            <div className='auctioncircles '>
            <img className='auction_circles border-gradient ' src={props.img1} />
            <img className='auction_circles border-gradient ml1' src={props.img2} />
            <img className='auction_circles border-gradient ml2' src={props.img3} />
            <p>{props.name}</p>
            </div>
        <div className='image_cont'>
         <div className='discimg'><img className='disc_image' src={props.img} /></div>
         <div className='likes'>
         <i class="fa fa-heart-o" aria-hidden="true"></i>
         <p>1.2k</p>
         </div>
        </div>

        <div>
            <p className='disc_content'>{props.title}</p>
            <div className='flex'>
                <div className='eye'>
                <i class="fa fa-eye" aria-hidden="true"></i>
                <p>View History</p>
                </div>
                <p>{props.stock}in Stock</p>
            </div>
            <div className='end_box'>
            <i class="fa fa-btc" aria-hidden="true"></i>
            <p>0.31 {props.type} 1/12</p>
            </div>
        </div>
        </div>
    )
}
export default AuctionBox;