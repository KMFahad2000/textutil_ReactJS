import React , {useState} from "react";



export default function Textform({ head = "default heading" }) 

  {
    const handleUpClick=() =>{
         console.log("upper case was clicked");
         let  newText= text.toUpperCase();
         setText(newText)
    }
     const handleOnChange=(event) =>{
         console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("enter your text here")
  return (
    <div>
      <h3>{head}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
         value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Conver to upper case
      </button>
    </div>
  );
}
