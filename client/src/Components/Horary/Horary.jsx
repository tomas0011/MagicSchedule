import React from 'react'
import './Styles/Horary.css'

export const Horary = ({ hour, value }) => {

    return (
        <div className='hour'>
            <div>
                <h5>{hour}</h5>
            </div>
            <div className={value ? value : 'none'}>
            </div>
        </div>
    )
}