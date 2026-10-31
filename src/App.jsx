







import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";

import Footer from "./components/Footer";


import LeaveReview from "./components/LeaveReview";
import AdminReviews from "./components/AdminReviews";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";

function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
       <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Portfolio />} />

        
        <Route path="/leave-review" element={<LeaveReview />} />

      
        <Route path="/admin/reviews" element={<AdminReviews />} />
      </Routes>
    </BrowserRouter>
  );
}
