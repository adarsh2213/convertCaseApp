import React from 'react'

export default function Sign() {
    return (
        <>
            <div className=''>
                <div className="container my-3 " >
                    <form className=' shadow p-3 bg-body-tertiary rounded mt-5'>
                        <h3>  Sign Up Here </h3>
                        <div className=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div className=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
                            <input type="password" className="form-control" id="ex
                            
                            
                            
                            ampleInputPassword1" />
                        </div>

                        <div className=" ms-5 mt-3 col-md-9 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary mx-2  ms-5 mt-3">Submit</button>

                    </form>
                </div>
            </div>

        </>
    )
}
