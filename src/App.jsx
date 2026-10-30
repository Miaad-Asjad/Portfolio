







import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import LeaveReview from "./components/LeaveReview";
import AdminReviews from "./components/AdminReviews";

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
