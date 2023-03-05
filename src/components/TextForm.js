import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnChange = (event) =>
    {
        setText(event.target.value);
    }
    const handleUpClick = () =>
    {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "Success");
    }
    const clearText = () =>
    {
      setText('');
      props.showAlert("Text cleared!", "Success");
    }
    const reverseText = () =>
    {
      let t = text.split(" ");
      t.reverse();
      let newText = t.join(" ");
      setText(newText);
      props.showAlert("Text reversed!", "Success");
    }
    const handleLoClick = () =>
    {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "Success");
    }
    const [text, setText] = useState('');
    return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'#313438', color: props.mode==='light'?'black':'white'}}
            rows="12"
          ></textarea>
          <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-2" onClick={reverseText}>Reverse Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear Text</button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p> 
      </div>
    </>
  );
}
