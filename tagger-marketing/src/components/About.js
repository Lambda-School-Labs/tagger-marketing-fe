//import dependencies
import React from "react";

import { Player } from "video-react";

//set Component Function
export default function About() {
  //render the component
  return (
    <div class="wrapper">
      <div class="about">
        <div class="about-content-container">
          <div class="register-container">
            <div class="tagline">
              <h3>
                Tagger is not just a faster email, <br/>
                it's Smarter Email.
              </h3>
            </div>
            <div class="about-form-container">
              <p>Intelligent Search: no need for specific keywords or phrases</p><br/>
              <p>Relationship Analytics: Tagger learns about the relationship between you and your contacts to better prioritize your inbox search.</p><br/>
              <p>Automated Tags: Machine Learning will automatically apply tags to better organize your emails and messages.</p><br/>
              <p>Localized Environment: Your emails and credentials are stored locally on your computer for added privacy and security.</p><br/>
              <p>Offline Capability: Access your email, compose new messages, and que up to be sent the moment you access the internet without prompting.</p><br/>
            </div>
          </div>
          <div class="about-image-container">
            <iframe
              class='media'
              src="https://drive.google.com/file/d/1hWgtgHQWiy11NycB7RYzcqBwC4UybmxO/preview"
              width="640"
              height="480"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
