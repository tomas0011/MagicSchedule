import React, {useState} from 'react';

export const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventdefault()
    }

    return (
        <div>
            <form>
                <h1>Registro de usuario</h1>
                <div>
                    <input type="text" name='email' placeholder='Name' value={form.email} onChange={handleOnChange}/>
                    <input type="text" name='password' placeholder='Sur Name' value={form.password} onChange={handleOnChange}/>

                    <button className="btn btn-outline-primary my-2 my-sm-0">Login</button>
                </div>
            </form>
        </div>
    )
}