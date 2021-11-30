import React from "react";
import "./App.css";
import Navbar from "./navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer';
// import { HashLink as Link } from 'react-router-hash-link';
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import './stylesheet/footer.css';
import Resume from './components/resume.jsx';
import Main from './components/projects.jsx';
import './stylesheet/contact.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
       
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<About />} />
            <Route exact path="/projects" element={<Main />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
        </Router>
  
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
