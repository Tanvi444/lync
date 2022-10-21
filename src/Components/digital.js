import React from 'react'
import '../sass/digital.scss'
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
const Digital = () => {
    return (
        <div className='digitalmain'>
            <div className='left'>
                <h1>A Better Digital Economy</h1>
                <p>
                A non-fungible token is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.
                </p>
                <p className='upper'>
                NFTs can be used to represent items such as photos, videos, audio, and other types of digital filesrain and unite your wizards into powerful unita guilds to increase.
                </p>
            </div>
            <div className='right'>
            <img className='down' src={img1} />
            <img className='up' src={img2} />
            </div>
        </div>
    )
}
export default Digital;