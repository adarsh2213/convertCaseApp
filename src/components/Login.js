import React from 'react'

export default function Login() {
    return (
        <>
            <div className=''>
                <div className="container my-3 " >
                    <form className=' shadow p-3 bg-body-tertiary rounded mt-5'>
                        <h3>  Login Here</h3>


                        <div className=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>


                        <div className=" ms-5 mt-3 col-md-9 form-check">

                        </div>
                        <button type="submit" className="btn btn-primary mx-2  ms-5 mt-3">Login</button>
                    </form>
                </div>
            </div>
        </>

    )
}
