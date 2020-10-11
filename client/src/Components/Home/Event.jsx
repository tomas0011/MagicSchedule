import React from 'react'

export const Event = ({ day, event }) => {
    return (
        <div>
            <h3>{day}</h3>
            <p>{event}</p>
        </div>
    )
}