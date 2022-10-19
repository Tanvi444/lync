import React from 'react'
import '../sass/collection.scss'
import logo from "../images/logo.PNG"
const Collection = (props) => {
    return (
        <>

                <div className='collection_grid border-gradient'>
                    <div className='inpadding'>
                        <div className='collectionimages'>
                            <img src={props.img1} />
                            <img src={props.img2} />
                            <img src={props.img3} />
                        </div>
                        <p className='name'>{props.title}</p>
                        <p className='items'>Collection has {props.item} items</p>
                    </div>
                    <div className='collection_lower'>
                        <div className='lower_img' >
                            <img src={props.img} />
                            <p>{props.name}</p>
                        </div>

                        <div className='rate btnn'>
                            <p>Place Bid</p>
                        </div>
                    </div>

                </div>

        </>
    )
}
export default Collection;