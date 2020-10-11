import React from 'react';
import moment from 'moment'
import { useEffect, useState } from 'react';
import './styles/Home.css'
import hoursHand from './img/aguja.png'
import minutesHand from './img/agujaMinutos.png'
import secondsHand from './img/agujaSegundos.png'

export const Clock = () => {
    const [hour, setHour] = useState(moment().format('h:mm:ss a'))
    const [day, setDay] = useState(moment().format('MMMM Do YYYY'))

    const getHour = () => {
        setHour(moment().format('h:mm:ss a'))
    }

    const getDay = () => {
        setDay(moment().format('MMMM Do YYYY'))
    }

    const getAnalogic = () => {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        let porcentHours;

        if(hours >= 12) {
            porcentHours = hours / 12 * 360;
        } else {
            porcentHours = hours / 24 * 360;
        }

        porcentHours += minutes / 60 * 30;
        const porcentMinutes = minutes / 60 * 360;
        const porcentSeconds = seconds / 60 * 360;

        if(document.getElementById('hours')) document.getElementById('hours').style.transform = `rotate(${porcentHours}deg)`;
        if(document.getElementById('minutes')) document.getElementById('minutes').style.transform = `rotate(${porcentMinutes}deg)`;
        if(document.getElementById('seconds')) document.getElementById('seconds').style.transform = `rotate(${porcentSeconds}deg)`;
    }

    useEffect(()=>{
        setInterval(() => {
            getHour();
            getDay();
            getAnalogic();
        }, 1000);
    },[])

    return (
        <div className='Clock'>
            <div className='analogic'>
                <img src={hoursHand} id="hours"/>
                <img src={minutesHand} id="minutes"/>
                <img src={secondsHand} id="seconds"/>
            </div>
            <h2 className='digital'>
                {day}
            </h2>
            <h2 className='digital'>
                {hour}
            </h2>
        </div>
    )
}