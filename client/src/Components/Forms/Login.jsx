import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as action from '../../redux/actions'
import './Style/Forms.css'

export const Login = () => {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('');

    const validate = () => {
        const {username, password} = form;
        
        if(!username || !password ) setError('all inputs are obligatory')
        else setError('username or password are incorects')
    }

    const handleOnChange = (e) => {
        setError('')
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try {
            await dispatch(action.userLogin(form))
            await dispatch(action.getMe())
            alert('andando!')
        } catch(err) { validate() }
    }

    return (
        <div>
            <form className='form'>
                <h1 className='title'>Ingreso de usuario</h1>
                <div className='inputs'>
                    <input type="text" name='username' placeholder='Username' value={form.username} onChange={handleOnChange}/>
                    <input type="text" name='password' placeholder='Password' value={form.password} onChange={handleOnChange}/>

                    <p align='center' className='text-danger'> { error } </p>

                    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={handleOnSubmit}>Login</button>
                </div>
            </form>
        </div>
    )
}