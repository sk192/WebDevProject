import pic2 from "../images/pic2.jpg";

import React from "react";

export default function Contact() {
  return (
    
    <div className="form-div">
      <form className="bg-light border rounded mx-auto p-4" action="#">
        <div className="input-group form-row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control inputName"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control inputEmail"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="teaxtarea" id="label1">Comments</label>
          <textarea className="form-control inputTextarea" id="textarea" rows="4"/>
        </div>
        <div className="input-group-append">
          <input type="submit" className="btn btn-primary" value="Submit" />
         
        </div>
      </form>
    </div>
 

  );
}
