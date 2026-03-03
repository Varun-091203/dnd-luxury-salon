import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import BookingModal from "./BookingModal";
import Footer from "./Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar openModal={() => setIsOpen(true)} />
      <Hero openModal={() => setIsOpen(true)} />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
}

export default App;