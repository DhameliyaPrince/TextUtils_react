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
        document.getSelection().removeAllRanges();
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
                <h1 className='mb-3'>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#232529' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#353535'
                    }} id='myBox' rows={8}></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#353535'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
            </div>
        </>
    )
}