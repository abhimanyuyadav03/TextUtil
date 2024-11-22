//import React from "react";
import React, {useState}from 'react';
function Textform(props)
{

const upper=()=>{
    console.log("Uppercase"+text);
    let newtext=text.toUpperCase();

    setText(newtext);
}

const chang=(Event)=>{
    console.log("OnChang");
    setText(Event.target.value);
}
const lower=()=>{
    console.log("convert to lowercase"+text)
    let lower= text.toLocaleLowerCase();
    setText(lower);
}
const clear=()=>
{
console.log("clear"+text);
let clean= text.repeat();
setText(clean);

}

    const [text, setText] = useState(" ");
    return(
        
        <>
     
        <div className="heading">Hello </div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea Here</label>
  <textarea className="form-control" onChange={chang} value={text} style={{backgroundColor:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-danger" onClick={upper}>Convert to Uppercase</button>
<button className="btn btn-primary m-3" onClick={lower}>Convert to Lowercase</button>
<button className="btn btn-success m-2" onClick={clear}>Clear Text</button>
<div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
    <h1> Your Text Summery</h1>
    <p>{text.split(" ").length} word and {text.length} character</p>
    <p>{0.008*text.split(" ").length} Minitus you can read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the somthing above"}</p>
  


</div>
        </>
    )
}
export default Textform