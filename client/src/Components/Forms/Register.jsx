import React, {useState} from 'react';
import './Style/Forms.css'
import { useDispatch } from "react-redux";
import * as action from '../../redux/actions'

export const Register = () => {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    })

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try {
            await dispatch(action.userRegister(form))
        } catch(err) { console.log(err) }
        
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

                    <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleOnSubmit}>Registrar</button>
                </div>
            </form>
        </div>
    )
}