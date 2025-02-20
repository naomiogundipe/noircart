import { useState } from "react";
import "./App.css";
import Hero from "./components/LandingPage/Hero";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Navbar />
        <SideNav menuOpen={menuOpen} handleMenuOpen={handleMenuOpen}/>
        <Hero menuOpen={menuOpen} />
      </div>
    </>
  );
}

export default App;
