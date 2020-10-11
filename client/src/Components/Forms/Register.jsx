import React, {useState} from 'react';

export const Register = () => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
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
        console.log(form[e.target.name])
    }

    const handleOnSubmit = (e) => {
        e.preventdefault()
    }

    return (
        <div>
            <form>
                <h1>Registro de usuario</h1>
                <div>
                    <input type="text" name='name' placeholder='Name' value={form.name} onChange={handleOnChange}/>
                    <input type="text" name='surname' placeholder='Sur Name' value={form.surname} onChange={handleOnChange}/>
                    <input type="text" name='email' placeholder='E-mail' value={form.email} onChange={handleOnChange}/>
                    <input type="text" name='confirmEmail' placeholder='Confirm E-mail' value={form.confirmEmail} onChange={handleOnChange}/>
                    <input type="text" name='password' placeholder='Password' value={form.password} onChange={handleOnChange}/>
                    <input type="text" name='confirmPassword' placeholder='Confirm Password' value={form.confirmPassword} onChange={handleOnChange}/>

                    <button className="btn btn-outline-danger my-2 my-sm-0">Registrar</button>
                </div>
            </form>
        </div>
    )
}