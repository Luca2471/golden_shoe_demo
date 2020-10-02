import React from "react";
import Hero from "../Hero/Hero";
import "./Home.scss";
import Footer from "../Footer/Footer";

const Home= () => {
  return (
<>  
    <main className="main-container"> 
    <Hero />
    </main>
    <Footer />
    </>
  );
};

export default Home