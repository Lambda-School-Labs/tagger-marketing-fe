//import dependencies
import React from "react";

//set Component Function
export default function Header() {
  //render the component
  return (
    <div class="wrapper">
      <div class="head-container">
        <div class="title">
          <h1>Tagger</h1>
        </div>
        <div class="head-content-container">
          <div class="register-container">
            <div class="tagline">
              <h3>
                Intelligent Email: <br />
                Working Beyond the Keyword
              </h3>
            </div>
            <div class="form-container">
              <h3>Form</h3>
            </div>
          </div>
          <div class='image-container'>
              Images
          </div>
        </div>
      </div>
    </div>
  );
}
