import React, { useEffect, useState } from "react";
import "./Men.scss";
import Footer from "../Footer/Footer";
import axios from 'axios';




const Men = () => {

    const [shoeData, setShoeData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/men").then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])





  return (
    <>
    <section className="products-container"> 
    
    </section>


      <Footer />
    </>
  );
};

export default Men;
