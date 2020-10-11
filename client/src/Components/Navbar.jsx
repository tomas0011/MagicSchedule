import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to='/'>Horario</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/day'>Day</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Month'>Week</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Month'>Month</Link>
                        </li>
                    </ul>
                    {false 
                    ? <h1>logeado</h1>  
                    : <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
                    }
                </div>
            </nav>
        </div>
    )
}