import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import horaries from '../../suppliers/horaries'
import { Horary } from '../Horary/Horary'
import './Styles/Day.css'

export const Day = () => {
    // valores iniciales
    const [filter, setFilter] = useState({
            min:'08:00', 
            max:'20:00'
        })
    const [inter, setInter] = useState('1 Hora');
    // valores aceptados como intervalos
    const interArr = ['30 Minutos', '1 Hora', '2 Horas par', '2 Horas imp'];

    // Validador de filtro de intervalos
    const ValSetInter = (set) => {
        if(!(interArr.find((a)=>a === set.target.value))) throw Error('ingresa un valor valido')
        setInter(set.target.value)
    }

    // Validador de filtro horario
    const ValSetFilter = (set) => {
        if(!(horaries.find((h)=>h === set.target.value))) throw Error('ingresa un horario valido')
        setFilter({
            ...filter,
            [set.target.name]: set.target.value
        })
    }

    // calculador de minutos formato HH-MM
    const getMin = (arr) => (Number(arr.split(':')[0]) * 60) + Number(arr.split(':')[1])

    // filtrado de horario
    const FilterHorary = (horary, filter) => {
        return horary.filter((h) => {
            h = getMin(h);
            const min = getMin(filter.min);
            const max = getMin(filter.max);

            return h >= min && h <= max;
        })
    }

    // estado inicial de filtrados
    let filtered = [];

    // filtrado condicional de intervalos y horarios
    if(inter === '30 Minutos') filtered = FilterHorary(horaries, filter);
    else if(inter === '1 Hora') filtered = FilterHorary(horaries.filter((h)=>h[3] !== '3'), filter);
    else if(inter === '2 Horas par') filtered = FilterHorary(horaries.filter((h)=>(h[3] !== '3') && (h[1] % 2 !== 1)), filter);
    else if(inter === '2 Horas imp') filtered = FilterHorary(horaries.filter((h)=>(h[3] !== '3') && (h[1] % 2 !== 0)), filter);
    

    return (
        <div className='horaries'>
            <div className='filters'>
                <div className='interval'>
                    <select value={inter} onChange={ValSetInter}>
                        { interArr.length
                            ? interArr.map((i)=> <option key={i} value={i}>{i}</option> )
                            : 'Error al seleccionar intervalo'
                        }
                    </select>
                </div>
                <div className='limit'>
                    <div>
                        <select value={filter.min} name="min" onChange={ValSetFilter}>
                            { horaries.length
                                ? horaries.map((h)=> <option key={h} value={h}>{h}</option> )
                                : 'Error al seleccionar intervalo'
                            }
                        </select>
                    </div>
                    <div>
                        <select value={filter.max} name="max" onChange={ValSetFilter}>
                            { horaries.length
                                ? horaries.map((h)=> <option key={h} value={h}>{h}</option> )
                                : 'Error al seleccionar intervalo'
                            }
                        </select>
                    </div>
                </div>
            </div>

            { filtered.length
                ? filtered.map((hour)=><Horary key={hour} {...{hour, value:0}}/>)
                : 'No hay resultados para este filtro'
            }
        </div>
    )
}