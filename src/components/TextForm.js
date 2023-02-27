import React, { useState } from 'react'




export default function TextForm(props) {
    const [text, setText] = useState("")
    const [show, setShow] = useState(false)
    const [alert, setAlert] = useState(false)
    const [savedata, setData] = useState([])

    const converUpparcase = () => {
        const newtext = text.toUpperCase()
        setText(newtext)

    }
    const converTolowercase = () => {

        const newtext = text.toLowerCase()
        setText(newtext)

    }

    const clearAllText = () => {

        const newtext = "";
        setText(newtext)

    }

    const Capitalize = () => {

        const newtext =
            text.toLowerCase()
                .split(' ')
                .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
                .join(' ');
        setText(newtext)

    }


    const CopyTOClipBoard = () => {

        navigator.clipboard.writeText(text);
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000)


    }
    const priview = () => {
        if (show == !true) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    const handleronChange = (event) => {

        setText(event.target.value)
    }

    const SaveData = () => {
        setData([...savedata, text])


    }



    return (
        <>
            <div className='homepage'>
                <div className="container my-3">
                    <h2>{props.Heading}</h2>
                    <div>
                        <div className="mb-3">
                            <textarea className="form-control" id="floatingTextarea" rows="10" value={text} onChange={handleronChange} placeholder="Enter Text"></textarea>
                            <div>
                                {
                                    alert ? <div className="alert alert-success" role="alert">
                                        successfully Copy!
                                    </div>
                                        :
                                        <div></div>
                                }</div>
                        </div>
                        <button type="button" className="btn btn-primary mx-2" onClick={converUpparcase}>Convert To Upparcase</button>

                        <button type="button" className="btn btn-primary mx-2" onClick={converTolowercase}>Conver To lowercase</button>

                        <button type="button" className="btn btn-primary mx-2" onClick={clearAllText}>Clear All</button>

                        <button type="button" className="btn btn-primary mx-2" onClick={Capitalize}>Capitalize</button>
                        <button type="button" className="btn btn-primary mx-2" onClick={CopyTOClipBoard} disabled={text == "" ? true : false} >Copy To ClipBoard</button>
                        <button type="button" className="btn btn-primary mx-2" onClick={SaveData} >Save Data</button>

                    </div>
                </div>
            </div>
            <div className="container my-3 ">
                <div className='bg-light'>
                    <h3>Summary</h3>
                    <h6 >
                        {text.split(" ").length} Words and {text.length} character
                    </h6>

                    <div>
                        <button type="button" className="btn btn-success"
                            onClick={priview} disabled={text == "" ? true : false}>Priview</button>
                        {
                            show ? <p>{text}</p>
                                :
                                <></>
                        }

                    </div>
                    <h3>Save data list</h3>
                    <div className="Savedata ">
                        {
                            savedata != [] && savedata.map((data, i) => {
                                return (
                                    <>
                                        <p key={i} className="ptag ">
                                            <div>{data}</div>
                                            <div className=''>
                                                <button type="button" className="btn btn-primary">remove</button>
                                            </div>
                                        </p>
                                    </>
                                )
                            })}

                    </div>

                </div>


            </div>
            <div className="card text-center mt-5 bg-secondary">
                <div className="container">
                    <div class="card-header text-white">
                        Featured
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title text-white">Special title treatment</h5>
                        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary text-white">Home page</a>
                    </div>
                    <div class="card-footer text-muted text-white">
                        © Copyright,Adarsh Maurya web developer

                    </div>
                </div>
            </div>

        </>
    )

}
