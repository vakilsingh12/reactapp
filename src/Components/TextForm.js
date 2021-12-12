import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState(" ");
  const handleUp=()=>{
      setText(text.toUpperCase());
      }
  const handleOnchange=(event)=>{
    setText(event.target.value);
  }
  const handleLow=()=>{
    setText(text.toLowerCase())
  }
  const ClearText=()=>{
    setText(" ");
  }
  const CopyText=()=>{
    navigator.clipboard.writeText(text);
    alert("Text Copied successfully");
    navigator.clipboard.writeText(text)
  }
  const handleSpace = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="6" value={text}
        onChange={handleOnchange}
        onCopy={CopyText}
        style={{backgroundColor:props.mode==='light'?'white':'grey'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUp}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLow}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpace}>handleExtraspace</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'dark'}}>
      <h2>Your text summary</h2>
      <p><b>{text.split(" ").length}</b> Words, <b>{text.length} </b>Characters</p>
      <p><b>{0.008*text.split(" ").length} </b>Minute read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it"}</p><br />
    </div>
    </>
  );
}

export default TextForm;
