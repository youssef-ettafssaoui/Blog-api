import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status : </b> Draft
          </span>
          <span>
            <b>Visibility : </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as DRAFT</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="front" id="front" />
            <label htmlFor="front">Front</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="back" id="back" />
            <label htmlFor="back">Back</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Networks" id="mobile" />
            <label htmlFor="mobile">Mobile</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="IA" id="IA" />
            <label htmlFor="IA">IA</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Databases" id="Databases" />
            <label htmlFor="Databases">Databases</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Networks" id="Networks" />
            <label htmlFor="Networks">Networks</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
