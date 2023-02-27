import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="main shadow p-3 bg-body-tertiary rounded ">

                <div className="container my-3" >
                    <div className='box shadow p-3 bg-body-tertiary rounded  '>
                        <h3>Contact Us </h3>
                        <div className="row ">
                            <div className=" ms-5 mt-3 col-md-9">
                                <input type="text" className="form-control mb-3 " placeholder=" Name" aria-label="First name" />
                            </div>

                        </div>
                        <div class=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="Enter Email" />
                        </div>
                        <div class=" ms-5 mt-3 col-md-9">
                            <label htmlFor="exampleFormControlTextarea1" class="form-label">Messages</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" className="btn btn-dark mx-2  ms-5 mt-3">Send Message </button>
                    </div>

                </div>
            </div>
        </>
    )
}
