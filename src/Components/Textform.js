import React, { useState } from "react";

export default function Textform({ heading = "default heading" }) {
  const [inputText, setInputText] = useState("enter your text here");  // ✅ Input only
  const [previewText, setPreviewText] = useState("");                 // ✅ Preview only

  const handleUpClick = () => {
    let convertedText = inputText.toUpperCase();
    setPreviewText(convertedText);     //  Show converted in preview
    setInputText("");                  //  Clear input textarea
  };

    const handleDownClick = () => {
    let convertedText = inputText.toLowerCase();
    setPreviewText(convertedText);     //  Show converted in preview
    setInputText("");                  // Clear input textarea
  };
  const handleOnChange = (event) => {
    setInputText(event.target.value);
    setPreviewText("");                //  Clear preview when typing
  };
 const handleClearClick=(event)=>{
  setPreviewText("");  
  setInputText(""); 
 }
  const wordCount = previewText.trim().split(/\s+/).filter(Boolean).length;
  const charCount = previewText.length;
  const readingTime = (wordCount * 0.008); // seconds @ 200wpm

  return (
    <>
      {/* Input Section */}
      <div className="mb-4">
        <h3>{heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={inputText} // Only input state
            onChange={handleOnChange}
            placeholder="Enter text here..."
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-5" onClick={handleDownClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary  my-2" onClick={handleClearClick}>
          Clear text
        </button>
      </div>

      {/* Preview Section */}
      <div className="container my-5">
        <h5>Text Summary</h5>
        <p>
          <strong>{wordCount}</strong> words and <strong>{charCount}</strong>{" "}
          characters
        </p>
        <p>
          <strong>{readingTime}</strong>s to read (@200 wpm)
        </p>

        <h5>Preview</h5>
        <div
          className="p-3 border rounded bg-light"
          style={{
            minHeight: "100px",
            whiteSpace: "pre-wrap",
            backgroundColor: previewText ? "#f8f9fa" : "#e9ecef",
          }}
        >
          {previewText || (
            <em className="text-muted">Click Convert to see output here...</em>
          )}
        </div>
        <button className="btn btn-primary  my-2" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
    </>
  );
}


