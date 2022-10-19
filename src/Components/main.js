import React from 'react'
import '../sass/cmp.scss'
import DiscoverData from '../data/discoverdata'
import AuctionData from '../data/auctiondata.js'
import CollectorData from '../data/collectordata.js'
import CollectionData from '../data/collectiondata.js'
import DiscoverBox from "./dicoverbox.js"
import AuctionBox from "./auctionbox.js"
import Collector from "./collectors.js"
import Collection from "./collection.js"
import Digital from "./digital.js"
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
        {(DiscoverData).map((data) => {
              return <>
                <DiscoverBox imagec={data.imagec} img={data.image} erc={data.erc} title={data.title}/>
              </>
            })}
      </div>
      <div className='top_grid border-gradient live'>
        <p>Live Auctions</p>
        <div className='view_main'>
          <p className='view'>VIEW ALL </p>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className='grid'>
        {(AuctionData).map((data) => {
              return <>
                <AuctionBox img={data.image} img1={data.image1} img2={data.image2} img3={data.image3} title={data.title} stock={data.stock} name={data.name} type={data.type}/>
              </>
            })}
      </div>
      <Digital/>
      <div className='top_grid border-gradient'>
        <p>Top Discover</p>
        <div className='view_main'>
          <p className='view'>Collections </p>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
          <p className='view'>Last 7 days </p>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className='collectorgrid'>
      {(CollectorData).map((data) => {
              return <>
                <Collector id={data.id} image={data.image} amount={data.amount} change={data.change} name={data.name}/>
              </>
            })}
      </div>
      <div className='readmore'>
                <button>Go To Rank</button>
            </div>
      <div className='top_grid border-gradient live'>
        <p>Popular Collection</p>
        <div className='view_main'>
          <p className='view'>VIEW ALL </p>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className='collectorgrid'>
      {(CollectionData).map((data) => {
              return <>
                <Collection img={data.image} img1={data.image1} img2={data.image2} img3={data.image3} title={data.title} item={data.item} name={data.name} />
              </>
            })}
      </div>
    </div>
  )
}
export default Cmp;