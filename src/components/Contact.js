import React from "react";
import "./Contact.css"; // External CSS for styling

export default function Contact({ name }) {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h1>Conectémonos</h1>
        <h1 style={{fontSize:"50px"}}>{name}</h1>
        {/* Social Icons */}
        <div className="social-icons">
          <a href="mailto:srinadhc07@gmail.com" className="fa fa-google" aria-label="Gmail" />
          <a href="https://x.com/srinadhch07" className="fa fa-twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer" />
          <a href="https://www.linkedin.com/in/srinadh-chintakindi-887550232/" className="fa fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" />
          <a href="https://www.instagram.com/mr_srinadhch07/" className="fa fa-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer" />
          <a href="https://www.youtube.com/results?search_query=srinadh+chintakindi" className="fa fa-youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer" />
          <a href="https://api.whatsapp.com/send/?phone=9346070083&text=Hi%20How%20are%20you%20?" className="fa fa-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" />
          <a href="https://www.github.com/Srinadhch07" className="fa fa-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer" />
        </div>
      </div>
    </section>
  );
}
