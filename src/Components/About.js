import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [myStyle2, setMyStyle2] = useState({
    //     color: '#353535',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle = () => {
    //     if (myStyle.color === 'black' || myStyle.color === 'black') {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: 'black'
    //         })

    //         setMyStyle2({
    //             color: "white",
    //             backgroundColor: '#353535'
    //         })

    //         setBtnText("Enable Light Mode")
    //     }

    //     else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: 'white'
    //         })

    //         setMyStyle2({
    //             color: "#353535",
    //             backgroundColor: 'white'
    //         })

    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "black" : "white"
    }

    let myStyle2 = {
        color: props.mode === "dark" ? "white" : "#353535",
        backgroundColor: props.mode === "dark" ? "#353535" : "white"
    }

    return (
        <>
            <div className='container py-3 rounded' style={myStyle}>
                <h1 className='py-1'>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle2}>
                                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use </strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle2}>
                                TextUtils is a free character counter tool that provides instant character count & word count
                                statistics for a given text. TextUtils reports the number of words and characters. Thus it is
                                suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong> Browser compatible </strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle2}>
                                This word counter software works in any browser such as chrome. firefox. Internet Explorer,
                                Safari, Opera. It Suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button type='button' onClick={toggleStyle} className='btn btn-dark my-3'>{btnText}</button> */}
            </div>
        </>
    )
}
