//import dependencies
import React from "react";

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
                Intelligent Email: <br />
                Working Beyond the Keyword
              </h3>
            </div>
            <div class="form-container">
              <p>
                The average person has two email accounts, and recieves between
                90-100 emails per day.
              </p>
              <p>That's 65,700 emails per year.</p>
              <p>
                That number only goes up the more emails you have due to your
                work, your websites, entrepreneurial ventures, and not all
                emails needed to be deleted right away, and not all emails are
                readily available through the traditional search system
              </p>
              <p>
                Tagger removes the need to remember specific keywords by
                utilizing machine learning to learn about your relationships
                with your contacts to better sift through your inboxes to find
                that email, even if you can't remember the email specifics.
              </p>
            </div>
          </div>
          <div class="image-container">Images</div>
        </div>
      </div>
    </div>
  );
}
