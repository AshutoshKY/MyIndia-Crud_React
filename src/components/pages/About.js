import React from "react";
import "./About.css";
import background from './Images/jandk.jpg';
import background1 from './Images/Assamjpg.jpg';
import background2 from './Images/rajasthan.jpg';
import background3 from './Images/delhi.jpeg';



// import { AiFillSignal,AiOutlinePoweroff,AiFillHeart,AiOutlineFileDone,AiTwotoneHighlight,AiFillSafetyCertificate,AiFillTool } from "react-icons/ai";
// import {BsGlobe2} from "react-icons/bs";
// import { FaGlobeAmericas } from "react-icons/ai";
const About = () => {
  return (
    <>
    <div  style={{ paddingRight:'15px' }}>
 <div class="header" style={{ paddingTop:'40px' ,alignItem:'centre', textAlign:'center', fontFamily:'Great Vibes,cursive'}}>
    <h1 style={{fontWeight:'bolder', fontSize:'6vh'}}>Take a Look at World's Best Country</h1>
  </div>
  <br></br>
  <ul>
    <li style={{ paddingTop:'10px' ,alignItem:'centre', textAlign:'center', listStyleType: "none" , border: '2px solid #FFF8EA', borderRadius:'10px', paddingBottom:'30px'}}>
    <img src={background} alt="h"  width='400px' height='200px' style={{ borderRadius:'50px', marginBottom:'8px' }} />
      <h2 style={{fontFamily:'Great Vibes,cursive'}}>J & K</h2>
      <p style={{fontFamily:'Oswald,sans-serif',fontSize:'20px'}}>Arabica dominates both Brazil and the world as a whole with about 85% of the production; robusta accounts for the remaining 30%. In Brazil, arabica production is located in the main coffee-growing cluster of states led by Rio where arabica is
        produced almost exclusively. Robusta is primarily grown in the northwestern much smaller state of Espirito Santo where about 80% of the coffee is robusta.</p>
      <a href="/">More</a>
      <br></br>
    </li>
    <li style={{ paddingTop:'10px' ,alignItem:'centre', textAlign:'center', listStyleType: "none" , border: '2px solid #FFF8EA', borderRadius:'10px', paddingBottom:'30px'}}>
    <img src={background1} alt="h"  width='400px' height='200px' style={{ borderRadius:'50px', marginBottom:'8px' }} />
      <h2 style={{fontFamily:'Great Vibes,cursive'}}>ASSAM</h2>
      <p style={{fontFamily:'Oswald,sans-serif',fontSize:'20px'}}>Arabica dominates both Brazil and the world as a whole with about 85% of the production; robusta accounts for the remaining 30%. In Brazil, arabica production is located in the main coffee-growing cluster of states led by Rio where arabica is
        produced almost exclusively. Robusta is primarily grown in the northwestern much smaller state of Espirito Santo where about 80% of the coffee is robusta.</p>
      <a href="/">More</a>
      <br></br>
    </li>
    <li style={{ paddingTop:'10px' ,alignItem:'centre', textAlign:'center', listStyleType: "none" , border: '2px solid #FFF8EA', borderRadius:'10px', paddingBottom:'30px'}}>
    <img src={background2} alt="h"  width='400px' height='200px' style={{ borderRadius:'50px', marginBottom:'8px' }} />
      <h2 style={{fontFamily:'Great Vibes,cursive'}}>RAJASTHAN</h2>
      <p style={{fontFamily:'Oswald,sans-serif',fontSize:'20px'}}>Arabica dominates both Brazil and the world as a whole with about 85% of the production; robusta accounts for the remaining 30%. In Brazil, arabica production is located in the main coffee-growing cluster of states led by Rio where arabica is
        produced almost exclusively. Robusta is primarily grown in the northwestern much smaller state of Espirito Santo where about 80% of the coffee is robusta.</p>
      <a href="/">More</a>
      <br></br>
    </li>
    <li style={{ paddingTop:'10px' ,alignItem:'centre', textAlign:'center', listStyleType: "none" , border: '2px solid #FFF8EA', borderRadius:'10px', paddingBottom:'30px'}}>
    <img src={background3} alt="h"  width='400px' height='200px' style={{ borderRadius:'50px', marginBottom:'8px' }} />
      <h2 style={{fontFamily:'Great Vibes,cursive'}}>DELHI</h2>
      <p style={{fontFamily:'Oswald,sans-serif',fontSize:'20px'}}>Arabica dominates both Brazil and the world as a whole with about 85% of the production; robusta accounts for the remaining 30%. In Brazil, arabica production is located in the main coffee-growing cluster of states led by Rio where arabica is
        produced almost exclusively. Robusta is primarily grown in the northwestern much smaller state of Espirito Santo where about 80% of the coffee is robusta.</p>
      <a href="/">More</a>
      <br></br>
    </li>
  </ul>
  </div>
</>
  )

};

export default About;
