import React from 'react'
import mylogo from '../aboutimage.jpg'

function About() {
    return (
        <>
            <div className='all' >
                <h1 className='text text-center'>All About Us </h1>

                <div className="container text-center mt-5">
                    <p>About Us page design while doing a great job at telling the world its story that tells the world their story. Their page shows how important it is for them to talk </p>
                    <div className="row ">
                        <div className="col">

                            <img src={mylogo} width="100%" height="400" />
                        </div>
                        <div className="col ">
                            <h1> About Us</h1>
                            <div>
                                <p>Shopify is an example of a company that nails its About Us page design while doing a great job at telling the world its story that tells the world their story. Their page shows how important it is for them to talk about their mission to help people start, run, and grow a business. The company prides itself in making ecommerce easier for everyone. Also, it paints a picture of the future for Shopify by mentioning that they’re building a 100-year company by investing in their people and the planet.</p>
                            </div>
                            <button type="button" className="btn mx-2 btn-primary">ReadMore</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
