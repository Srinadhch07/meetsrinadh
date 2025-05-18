
import { BrowserRouter , Routes, Route } from "react-router-dom";
import  { useState, useEffect } from "react";

import Nav from "./components/nav";


import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achivements from "./components/achievements";
import Hub from "./components/hub";
import Blog from "./components/blog";


function App() {
    const [darkMode, setDarkMode] = useState(false);
   
    useEffect(() => {
    if (darkMode) {
       document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, [darkMode]);

  const [name,SetName] = useState("スリナード");
  const [fade, setFade] = useState(true);
  const names = [
          "SRINADH",            // English
          "श्रीनाथ",            // Hindi
          "శ్రీనాథ్",           // Telugu
          "ஸ்ரீநாத்",           // Tamil
          "ಶ್ರೀನಾಥ್",           // Kannada
          "ശ്രീനാഥ്",           // Malayalam
          "শ্রীনাথ",            // Bengali
          "શ્રીનાથ",            // Gujarati
          "ਸ੍ਰੀਨਾਥ",           // Punjabi
          "سری ناتھ",           // Urdu
          "سرينات",            // Arabic
          "Сринад",            // Russian
          "Срінад",            // Ukrainian
          "სრინადჰ",           // Georgian
          "Սրինադհ",           // Armenian
          "סְרִינַדְה",         // Hebrew
          "سْرِينَادْه",        // Persian
          "སྲི་ནཱད",           // Tibetan
          "स्रिनाध",            // Marathi
          "శ్రీనాద్",           // Kannada (alternate)
          "スリナード",         // Japanese
          "스리나드",           // Korean
          "斯里纳德",           // Chinese (Simplified)
          "斯里納德",           // Chinese (Traditional)
          "ศรีนาด",             // Thai
          "ស្រីណាឌ",            // Khmer
          "ສຣິນາດ",            // Lao
          "စရီနာဒ်",           // Burmese
          "ስሪናድ",              // Amharic
          "ሰሪናድ",              // Tigrinya
          "ስሪናድ",              // Oromo
          "سریناد",             // Kurdish (Sorani)
          "سْرِينَادْ",          // Kurdish (Kurmanji)
          "ஸ்ரீநாத்",           // Sinhala
          "Srinaḋ",             // Irish
          "Srínadh",            // Czech/Slovak-style
          "Srinád",             // Hungarian-style
          "Srinad",             // French-style transliteration
          "Srinato",            // Italian-style transliteration
 
         
          "Сринаџ",             // Serbian (Cyrillic)
          "Сринад",             // Bulgarian
          "Srinadă",            // Romanian
          
          "Srināds",            // Lithuanian
          
          "Srīnādhaḥ",          // Sanskrit (IAST)
        ];


        useEffect(()=>{
          const interval =setInterval(() => {
            const randomIndex = Math.floor(Math.random() * names.length);
            SetName(names[randomIndex]);
            setFade(true);
          }, 5000); // Change name every 1 second
          return () => clearInterval(interval); // Cleanup interval on component unmount 
        });

  return (

    <BrowserRouter basename="/meetsrinadh">
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} name={name} fade={fade} />
        
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact name={name} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/achivements" element={<Achivements />} />
            <Route path="/hub" element={<Hub />} />
          </Routes>
    </BrowserRouter>
  

  );
}

export default App;
