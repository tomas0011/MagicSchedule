import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Event } from './Event'
import { Clock } from './Clock'
import './styles/Home.css'

export const Home = () => {
    const HoraryDay = useSelector((state)=>state.HoraryDay)
    const events = useSelector((state)=>state.events)

    console.log('home')

    return (
        <div className='home'>
            <div className='events'>
                { events.length
                    ? events.map(e => <Event {...e}/>)
                    : <h4>No hay programados hoy</h4>
                }
            </div>
            <div>
                <Clock/>
            </div>
            <div className='toDoList'>
                <h1>hola</h1>
            </div>
        </div>
    )
}