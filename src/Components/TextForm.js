import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUp=()=>{
      setText(text.toUpperCase());
      props.showAlert("Uppercase is enabled!","success")
      }
  const handleOnchange=(event)=>{
    setText(event.target.value);
  }
  const handleLow=()=>{
    setText(text.toLowerCase())
    props.showAlert("Lowercase is enabled!","success")
  }
  const ClearText=()=>{
    setText(" ");
    props.showAlert("Text cleared!","danger")
  }
  const CopyText=()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Text coppied!","success")
  }
  const handleSpace = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed!","success")
  }
  return (
    <>
    <div>
      <h2 className="mb-2" style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="6" value={text}
        onChange={handleOnchange}
        onCopy={CopyText}
        style={{backgroundColor:props.mode==='light'?'white':'#3f30b2',color:props.mode==='dark'?'white':'dark'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUp}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLow}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleSpace}>handleExtraspace</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p><b>{text.length>0 ? text.trim().split(/\s+/).length : 0}</b> Words, <b>{text.length} </b>Characters</p>
      <p><b>{0.008*text.split(" ").filter(res=>res.length!==0).length} </b>Minute read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p><br />
    </div>
    </>
  );
}

export default TextForm;
