import React from 'react'
import './sass/cmp.scss'
import DiscoverBox from "./dicoverbox.js"
import AuctionBox from "./auctionbox.js"
import Collector from "./collectors.js"
import Collection from "./collection.js"
const Cmp = () => {
  return (
    <div>
      <div className='top_grid border-gradient'>
        <p>Top Discover</p>
        <div className='view_main'>
          <p className='view'>VIEW ALL </p>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className='grid'>
        <DiscoverBox /><DiscoverBox /><DiscoverBox /><DiscoverBox />
      </div>
      <div className='top_grid border-gradient'>
        <p>Live Auctions</p>
        <div className='view_main'>
          <p className='view'>VIEW ALL </p>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className='grid'>
        <AuctionBox /><AuctionBox /><AuctionBox /><AuctionBox />
      </div>
      <div className='top_grid border-gradient'>
        <p>Top Discover</p>
        <div className='view_main'>
          <p className='view'>Collections </p>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
          <p className='view'>Last 7 days </p>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
      <Collector />
      <div className='top_grid border-gradient'>
        <p>Popular Collection</p>
        <div className='view_main'>
          <p className='view'>VIEW ALL </p>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <Collection/>
    </div>
  )
}
export default Cmp;