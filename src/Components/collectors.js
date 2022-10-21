import React from 'react'
import '../sass/collector.scss'
const Collector = (props) => {
    return (
        <div>
                <div className='collector_grid border-gradient'>
                    <div className='flex2'>
                        <p>{props.id}</p>
                        <div className='testt'>
                        <img className='collector_img' src={props.image} />
                        <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div>
                            <p>{props.name}</p>
                            <p className='dollar'>&#36;{props.amount}</p>
                        </div>
                    </div>
                    <div className='rate'>
                        <p>{props.change}</p>
                    </div>

                </div>
        </div>
    )
}
export default Collector;