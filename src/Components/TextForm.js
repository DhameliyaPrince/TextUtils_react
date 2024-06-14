import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!", 'success')
    }
    
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!", 'success')
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", 'success')
    }
    
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", 'success')
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", 'success')
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#353535'}}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#353535' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#353535'
                    }} id='myBox' rows={8}></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClrClick}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#353535'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}