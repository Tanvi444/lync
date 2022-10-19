import React from 'react'
import './sass/collection.scss'
import logo from "./images/logo.PNG"
const Collection = () => {
    return (
        <div>

            <div className='collectorgrid'>
                <div className='collection_grid border-gradient'>
                    <div className='inpadding'>
                        <div className='collectionimages'>
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                        </div>
                        <p className='name'>Radium Animated Monster</p>
                        <p className='items'>Collection has 13 items</p>
                    </div>
                    <div className='collection_lower'>
                        <div className='lower_img' >
                            <img src={logo} />
                            <p>Resselmrh</p>
                        </div>

                        <div className='rate'>
                            <p>+14.4%</p>
                        </div>
                    </div>

                </div>
                <div className='collection_grid border-gradient'>
                    <div className='inpadding'>
                        <div className='collectionimages'>
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                        </div>
                        <p className='name'>Radium Animated Monster</p>
                        <p className='items'>Collection has 13 items</p>
                    </div>
                    <div className='collection_lower'>
                        <div className='lower_img' >
                            <img src={logo} />
                            <p>Resselmrh</p>
                        </div>

                        <div className='rate'>
                            <p>+14.4%</p>
                        </div>
                    </div>

                </div>
                <div className='collection_grid border-gradient'>
                    <div className='inpadding'>
                        <div className='collectionimages'>
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                        </div>
                        <p className='name'>Radium Animated Monster</p>
                        <p className='items'>Collection has 13 items</p>
                    </div>
                    <div className='collection_lower'>
                        <div className='lower_img' >
                            <img src={logo} />
                            <p>Resselmrh</p>
                        </div>

                        <div className='rate'>
                            <p>+14.4%</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Collection;