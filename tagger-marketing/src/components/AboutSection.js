//import dependencies
import React from "react";
import Adrian from "../img/Adrian.jpg"
import Cam from "../img/Cam.png"
import Brandon from "../img/Brandon.png"
import Anthony from "../img/Anthony.jpg"
import Jack from "../img/Jack.jpg"
import Chris from "../img/Christopher.jpg"
import Monica from "../img/Monica.jpg"

//set Component Function
export default function AboutSection() {
  //render the component
  return (
      <div>
          <h2>This is our team:</h2>
    <div class= "teamlead">
        <h3 class="h3">Team Lead</h3>
        <img src= {Cam} alt = "a picture of our teamlead"/>
        <p>Cam Perry</p>
        <div class= "icon">
        <a href="https://github.com/cpscott1" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/camperry1/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div class = "parent1">
    <div class = "Anthony">
        <h3 class="h3">Web Developer</h3>
        <img src= {Anthony} alt = "A picture of Anthony"/>
        <p>Anthony Kawa</p>
        <div class= "icon">
        <a href="https://github.com/frankie95667" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/anthony-kawa-7b34043a/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div class= "Adrian">
        <h3 class="h3">Web Developer</h3>
        <img src= {Adrian} alt= " A picture of adrian"/>
        <p>Adrian Nasaruk</p>
        <div class= "icon">
        <a href="https://github.com/adriannasaruk" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/adrian-nasaruk-73097b183/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div class= "Christopher">
        <h3 class="h3">DS Software Engineer</h3>
        <img src= {Chris} alt= " A picture of Christopher"/>
        <p>Christopher Filkins</p>
        <div class= "icon">
        <a href="https://github.com/filchyboy" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/chrisfilkins/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    </div>
    <div class = "parent2">
    <div class = "Monica">
        <h3 class="h3">DS Software Engineer</h3>
        <img src= {Monica} alt = "A picture of Monica"/>
        <p>Monica Bustamente</p>
        <div class= "icon">
        <a href="https://github.com/Moly-malibu" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/monica-bustamante-b2ba3781/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div class= "Brandon">
        <h3 class="h3">DS Software Engineer</h3>
        <img src = {Brandon} alt= "A picture of Brandon"/>
        <p>Brandon Mulas</p>
        <div class= "icon">
        <a href="https://github.com/bmulas1535" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/brandon-mulas/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    <div class= "Jack">
        <h3 class="h3">DS Software Engineer</h3>
        <img src= {Jack} alt= " A picture of Jack"/>
        <p>Jack Lindberg</p>
        <div class= "icon">
        <a href="https://github.com/Jllin50" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
    </div>
    </div>
    </div>
  );
}
