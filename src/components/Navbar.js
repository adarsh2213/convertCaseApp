import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark " >
                <div className="container-fluid" >

                    <a className="navbar-brand  text-white" href="#">ConverteCase</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active  text-white" aria-current="page" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active  text-white" aria-current="page" to="contact">Contact</Link>
                            </li>

                        </ul>
                        <form class="d-flex flex-row-reverse">
                            <div className='bg-primary rounded float-end ms-18 bg-primary ms-2 p-1'>
                                <Link className="nav-link active  text-white" aria-current="page" to="login">Login</Link>
                            </div>
                            <div className='bg-primary rounded float-end me-1 p-1'>
                                <Link className="nav-link active  text-white" aria-current="page" to="Sign">Sign up</Link>
                            </div>


                        </form>





                    </div>


                </div>
            </nav>
        </>
    )
}
