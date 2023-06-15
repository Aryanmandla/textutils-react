import React, { useState } from 'react'
/* useState Hook = helps to declare state variable */
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("handleUpClick function was clicked");
        let newText = text;
        if (newText === text.toLowerCase()) {
            newText = text.toUpperCase();
        } else {
            newText = text.toLowerCase();
        }
        setText(newText);
        props.showAlert("Converted","success");
    }
    const handleOnChange = (event) => {
        console.log("Onchange was clicked");
        setText(event.target.value);
    }

    const handleClick = () => {
        console.log("HandleClick was clicked");
        let capitalizedText = text.replace(/\b\w/g, (l) => l.toUpperCase());
        setText(capitalizedText);
        props.showAlert("Converted first letter to UpperCase","success");

    }

    const handleClearClick = () => {
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Cleared","success");
    }

    const analyzetext = () => {
        const words = text.split(' ');
        wordcountlength(words.length);

        const chars = text.split('');
        charcountlength(chars.length);
        props.showAlert("Text Analyzed","success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSpaces = () => {
        let spac = text.replace(/\s+/g, ' ');
        setText(spac);
    }
    const [text, setText] = useState('');
    const [wordCount, wordcountlength] = useState(0);
    const [charCount, charcountlength] = useState(0);
    // const [size, setSize] = useState(40);
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="9"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert Casing</button>
                <button className="btn btn-primary mx-3" onClick={handleClick} >Convert first letter to Upper Case</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={analyzetext}>Analyze</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
                <button className='btn btn-primary mx-3' onClick={handleSpaces} >Handle Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter text to preview it here."}</p>
                <h3>Analyze</h3>
                <p>Word Count: {wordCount}</p>
                <p>Char Count: {charCount}</p>
            </div>
        </>
    )
}
