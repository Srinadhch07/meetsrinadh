import  { useState, useEffect } from "react";
import "./Hero.css";

// Hero component
export default function Hero() {
//   To change the baclheound colors
  const [backgroundColor,setBackgroundColor] = useState("white");
// To change the shape of the logo
  const [shape,setShape] = useState("10%")

// To change the Background color of logo
useEffect(() => {
    const interval = setInterval(() =>{
        const color = Math.floor(1000000 + Math.random() * 900000);
        setBackgroundColor("#"+color.toString(16));
    },1500);
    return () =>clearInterval(interval);
},[]);

// To change the shape of the logo
useEffect(() => {
    const interval = setInterval(() =>{
        const border = Math.floor(Math.random() * 101);
        setShape(border.toString(16)+"%");
    },1500);
    return () =>clearInterval(interval);
},[]);




  // To change the font size of the logo
  const [fontSize1,setFontSize1] = useState("");
  const [fontSize2,setFontSize2] = useState("");
  const [fontSize3,setFontSize3] = useState("");

  useEffect(() => {
      const interval = setInterval(() =>{
          const f1 = Math.floor(Math.random() * (70 - 35 + 1)) + 35;
          const f2 = Math.floor(Math.random() * (70 - 35 + 1)) + 35;
          const f3 = Math.floor(Math.random() * (70 - 35 + 1)) + 35;
          setFontSize1(f1 +"px");
          setFontSize2(f2 +"px");
          setFontSize3(f3 +"px");
          
      },1500);
      return () =>clearInterval(interval);
  },[]);

  return (
    <>
  
    <section className="hero">

    {/* Logo Setup */}
    <picture>
        <source media="(max-width: 600px)" srcSet={`${process.env.PUBLIC_URL}/images/logo303.jpg`} />
        <img
          src={`${process.env.PUBLIC_URL}/images/logo302.jpg`}
          alt="Logo"
          className="profile"
          id="profile"
          style={{
            backgroundColor: backgroundColor,
            borderRadius: shape,
            transition: "background-color 0.5s ease-in-out, border-radius 0.5s ease-in-out"
          }}
        />
      </picture>

      <div className="hero-content">
        <h1>Hello, I'm   
        <br />
        <span style={{ color:"red", fontSize:"70px" }}>S</span>
        <span style={{ fontSize:fontSize1 ,transition: "font-size 0.5s ease-in-out, border-radius 0.5s ease-in-out" }}>R</span>
        <span style={{ fontSize:fontSize2 ,transition: "font-size 0.5s ease-in-out" }}>I</span>
        <span style={{ fontSize:fontSize3 ,transition: "font-size 0.5s ease-in-out" }}>N</span>
        <span style={{ fontSize:fontSize1 ,transition: "font-size 0.5s ease-in-out" }}>A</span>
        <span style={{ fontSize:fontSize2 ,transition: "font-size 0.5s ease-in-out" }}>D</span>
        <span style={{ fontSize:fontSize3 ,transition: "font-size 0.5s ease-in-out" }}>H</span>
        
        
        </h1>
        <p>Full-Stack Developer | AI & ML Practitioner | Freelancer | Data analyst</p>
        <p>I build modern solutions that are clean and responsive.</p>
        <a href="https://Srinadhch07.github.io/meetsrinadh/documents/resume.pdf" download="SRINADH CHINTAKINDI Resume" className="hero-btn">Resume</a>
        <br></br>
      </div>
    </section>
  </>
  );
}
