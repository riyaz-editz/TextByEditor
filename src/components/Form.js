import React, { useState } from 'react';


export default function Form(props) {
  const [text, setText] = useState("");
  // text= "this is change" this is wrong way
  // setText("this is change"); right way

  const handleupclick = () => {
    console.log("handleupclick " + text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted to upperCase!", "success")
  }
  const handlelowclick = () => {
    // console.log("handleupclick " + text)
    // setText("you are click handle up click")
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lowerCase!", "success")

  }
  const handleupchange = (event) => {
    console.log("handle on change")
    setText(event.target.value)
    // console.log(event.target.value)
  }
  const handle_copy_click = ()=>{
    let val = document.getElementById("mybox")
    val.select()
    navigator.clipboard.writeText(val.value)
    props.showalert("Copied succesfully!", "success")

  }
  const handle_exspacr_click = ()=>{
    let val = text.split(/[ ]+/)
    setText(val.join(" "))
    props.showalert("Succesfully remove extra spaces!", "success")

  }
  const handleblankclick = ()=>{
    setText("")
  }


  return (
    <>
    <div className='container'>
      <h2><b className={`form-check-label text-${props.Mode === "dark" ? "light":"dark"}`}> {props.heading}</b></h2>

      {/* <span className="input-group-text">{props.title}</span> */}
      <textarea className="form-control" placeholder="Describe yourself here..." rows={8} id='mybox' value={text} onChange={handleupchange} style={{backgroundColor:props.Mode === "dark"?"#0F2137":"white", color:props.Mode === "dark"?"white":"#0f2c63" }}></textarea>
      <button className="btn my-3 btn-primary mx-1" onClick={handleupclick}>Convert to uppercase</button>
      <button className="btn my-3 mx-1 btn-primary" onClick={handlelowclick}>Convert to lowercase</button>
      <button className="btn my-3 mx-1 btn-primary px-4" onClick={handle_copy_click}>Copy all Text</button>
      <button className="btn my-3 mx-1 btn-primary px-4" onClick={handle_exspacr_click}>Remove ext spaces</button>

      <button className="btn btn-danger" id='clr_btn'  onClick={handleblankclick}> Clear all</button>

    </div>
    <div className="container my-3" style={{color:props.Mode === "dark"?"white":"#0f2c53"}}>
      <h2> <b> Your Text Summary </b></h2>
      <p><b>{text.split(" ").length}</b> Word <b>{text.length}</b> Characters</p>
      <p> <b>{0.008 * text.split(" ").length}</b> Minutes read</p>
      <h2 className='my-1' > <b> Preview </b></h2>
      <hr />
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
    </div>
    </>
  )
}







