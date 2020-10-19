import React, {useState} from 'react';
import './Style/Forms.css'
import { useDispatch } from "react-redux";
import * as action from '../../redux/actions'

export const Register = () => {
    const dispatch = useDispatch()

    const [error, setError] = useState('');

    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const validate = () => {
        const {name, surname, username, password, confirmPassword} = form;
        
        if(!name || !surname || !username || !password || !confirmPassword) setError('all inputs are obligatory')
        else if(password !== confirmPassword) setError('Passwords are different')
        else setError('user already exist')
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
            await dispatch(action.userRegister(form))
            alert('andando!')
        } catch(err) { validate() }
        
    }

    return (
        <div>
            <form className='form'>
                <h1 className='title'>Registro de usuario</h1>
                <div className='inputs'>
                    <input type="text" name='name' placeholder='Name' value={form.name} onChange={handleOnChange}/>
                    <input type="text" name='surname' placeholder='SurName' value={form.surname} onChange={handleOnChange}/>
                    <input type="text" name='username' placeholder='Username' value={form.username} onChange={handleOnChange}/>
                    <input type="text" name='password' placeholder='Password' value={form.password} onChange={handleOnChange}/>
                    <input type="text" name='confirmPassword' placeholder='Confirm Password' value={form.confirmPassword} onChange={handleOnChange}/>

                    <p align='center' className='text-danger'> { error } </p>

                    <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleOnSubmit}>Registrar</button>
                </div>
            </form>
        </div>
    )
}