import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Event } from './Event'
import { Clock } from './Clock'
import './styles/Home.css'

export const Home = () => {
    const HoraryDay = useSelector((state)=>state.HoraryDay)
    const toDo = useSelector(state=>state.toDo)
    const events = useSelector((state)=>state.events)

    const addToDo = () => {
        console.log('add')
    }

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
                <button onClick={addToDo}>+</button>
                {toDo.length
                    ?   <div>
                            {toDo.map((d)=> {
                                console.log(d)
                            return <div>
                                <h4>{d.name}</h4>
                                <p>{d.description}</p>
                            </div>} )}
                        </div>
                    :   <h4>not task yet</h4> 
                }
            </div>
        </div>
    )
}