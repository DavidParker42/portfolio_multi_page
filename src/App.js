import './reset.css';
import './App.css';
import AboutMe from './pages/AboutMe';
import Home from "./pages/Home";
import Navbar from './components/navbar';
import Header from './components/header';
import Contact from './pages/contact';
import Footer from './components/footer';
import Work from "./pages/work";
import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router-dom";




export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  console.log("currently on " , currentPage)
  // checking to see what the value of 1currentPage` is. Depending on the value of currentPage, we return the corresponding component to render
  const renderPage = () => {
    console.log("here1");
    if (currentPage === "Home") {
      console.log("Home");
      return <Home />;
    }
    if (currentPage === "about") {
      console.log("AboutMe");
      return <AboutMe />;
    }
    if (currentPage === "contact") {
      // console.log("contact");
      return <Contact />;
    }
    if (currentPage === "work") {
      // console.log("work");
      return <Work />;
    }
    // return <aboutMe />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page)
    renderPage()
  
  };

  return (
    <div>
      {/* passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling the renderPage method which will return a component */}
      {renderPage()}
    </div>
  );
}



