import React,{useState} from 'react'

export default function TextForm(props) {
    
   const handleUpClick=()=>{
    console.log("Uppercase  was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted To Uppercase","success");
   }

   const handleLoClick=()=>{
    console.log("Lowercase  was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted To Lowercase","success");
   }

   const handleClear=()=>{
    console.log("Cleartext  was clicked");
    let newText="";
    setText(newText);
    props.showAlert("Text is cleared","success");
   }

   const handleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
   }

   const handleExtraSpaces =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");
   }
   

   const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
   
   }

    const [text,setText]=useState('Enter text here');
  return (
    <>
    
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
           <textarea className="form-control" value={text}
           onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8">  </textarea>
           
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>

    <div className="container my-3">
      <h3>Your Text preview</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>

  )
}
