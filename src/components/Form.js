import React, { useState } from 'react';

export default function Form(props) {
    const buttonUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "Success");
    }
    const buttonDownClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "Success");
    }
    const buttonSpacesClicked = () => {
        var newText = "";
        for (let index = 0; index < text.length; index++) {
            if (text.charAt(index) === ' ')
                continue;
            newText = newText + text.charAt(index);
        }
        setText(newText);
        props.showAlert("Removed extra spaces", "Success");
    }
    const buttonClearClicked = () => {
        setText("");
        props.showAlert("Cleared input screen", "Success");
    }

    const buttonCopyClicked = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "Success");
    }

    const buttonOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="my-2">{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Enter your text below</label>
                    <textarea className="form-control" id="mybox" rows="10" value={text} onChange={buttonOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={buttonUpClicked}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={buttonDownClicked}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={buttonSpacesClicked}>Remove Spaces</button>
                <button className="btn btn-primary mx-2" onClick={buttonClearClicked}>Clear All</button>
                <button className="btn btn-primary mx-2" onClick={buttonCopyClicked}>Copy Text</button>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Find more logic below</h1>
                <p>Your sentence contains <b>{text.length} letters or {text.length > 0 ? text.trim().split(" ").length : 0} words.</b></p>
                <p>You can read this in <b>{0.08 * text.split(" ").length}minutes.</b></p>
                <h2>Your preview below:-</h2>
                <p>{text.length > 0 ? text : <i>Enter something to preview</i>}</p>
            </div>
        </>
    )
}