// import Navbar from "./components/Navbar";
// import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";
// // import Blog from "./components/Blog";
// // import Services from "./components/Services";
// // import About from "./components/About";
// // import Home from "./components/Home";
// // import Contact from "./components/Contact";
// // import Footer from "./components/Footer";


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* <Home /> */}
//        <Gallery />
//       {/* <Blog /> */} 
//       {/* <Services /> */}
//       {/* <About /> */}
//       {/* <Contact /> */}
//        <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Services from "./components/Services";
import About from "./components/About";
import Home from "./components/Home";
import Donation from "./components/Donation"
import Contact from "./components/Contact";
// import VolunteerForm from "./components/VolunteerForm";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} /> 
        {/* <Route path="/footer" element={<Footer/>} />  */}
        <Route path="/about" element={<About/>} /> 
        <Route path="/services" element={<Services/>} /> 
        <Route path="/blog" element={<Blog/>} /> 
        <Route path="/gallery" element={<Gallery/>} /> 
        <Route path="/donation" element={<Donation/>} /> 
        {/* <Route path="/VolunteerForm" element={<VolunteerForm/>} />  */}
      </Routes>
    </Router>
  );
}

export default App;
