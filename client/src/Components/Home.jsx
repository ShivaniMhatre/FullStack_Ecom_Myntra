import React from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css";
import poster from "../Assets/poster.jpg";
import headingOne from "../Assets/heading-1.webp";
import headingTwo from "../Assets/heading-5.webp";
import imgOne from "../Assets/1.webp";
import imgTwo from "../Assets/2.webp";
import imgThree from "../Assets/3.webp";
import imgFour from "../Assets/4.webp";
import imgFive from "../Assets/5.webp";
import imgSix from "../Assets/6.webp";
import imgSeven from "../Assets/7.webp";
import img8 from "../Assets/8.webp";
import img9 from "../Assets/9.webp";
import img10 from "../Assets/10.webp";
import img11 from "../Assets/11.webp";
import img12 from "../Assets/12.webp";
import img13 from "../Assets/13.webp";
import img14 from "../Assets/14.webp";
import img15 from "../Assets/15.webp";
import img16 from "../Assets/16.webp";
import catImg1 from "../Assets/1-1.webp";
import catImg2 from "../Assets/1-2.webp";
import catImg3 from "../Assets/1-3.jpg";
import catImg4 from "../Assets/1-4.webp";
import catImg5 from "../Assets/1-5.webp";
import catImg6 from "../Assets/1-6.webp";
import catImg7 from "../Assets/1-7.webp";
import catImg8 from "../Assets/1-8.webp";
import catImg9 from "../Assets/1-9.jpg";
import catImg10 from "../Assets/1-10.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="body">
        {/* <!-- top section --> */}
        {/* <iframe
          id="sale-offer"
          src="https://giphy.com/embed/TSjMC8Kxp5G2TpBr0J"
          width="180"
          height="180"
          frameborder="0"
        ></iframe> */}

        <div id="top-body">
          <div>
            <img src={poster} alt="" />
          </div>
        </div>

        {/* <!--body  section 1 --> */}

        <div id="middle-body">
          <div className="middle-heading">
            <div>
              <img src={headingOne} alt="" />
            </div>
          </div>

          <div className="image-section-1">
            <div>
              <img src={imgOne} alt="" />
            </div>
            <div>
              <img src={imgTwo} alt="" />
            </div>
            <div>
              <img src={imgThree} alt="" />
            </div>
            <div>
              <img src={imgFour} alt="" />
            </div>
            <div>
              <img src={imgFive} alt="" />
            </div>
            <div>
              <img src={imgSix} alt="" />
            </div>
            <div>
              <img src={imgSeven} alt="" />
            </div>
            <div>
              <img src={img8} alt="" />
            </div>
            <div>
              <img src={img9} alt="" />
            </div>
            <div>
              <img src={img10} alt="" />
            </div>
            <div>
              <img src={img11} alt="" />
            </div>
            <div>
              <img src={img12} alt="" />
            </div>
            <div>
              <img src={img13} alt="" />
            </div>
            <div>
              <img src={img14} alt="" />
            </div>
            <div>
              <img src={img15} alt="" />
            </div>
            <div>
              <img src={img16} alt="" />
            </div>
          </div>

          {/* <!-- section 2 --> */}

          <div className="middle-heading">
            <div>
              <img src={headingTwo} alt="" />
            </div>
          </div>

          <div id="image-section-new">
            <div>
              <img src={catImg1} alt="" />
            </div>
            <div>
              <img src={catImg2} alt="" />
            </div>
            <div>
              <img src={catImg3} alt="" />
            </div>
            <div>
              <img src={catImg4} alt="" />
            </div>
            <div>
              <img src={catImg5} alt="" />
            </div>
            <div>
              <img src={catImg6} alt="" />
            </div>
            <div>
              <img src={catImg7} alt="" />
            </div>
            <div>
              <img src={catImg8} alt="" />
            </div>
            <div>
              <img src={catImg9} alt="" />
            </div>
            <div>
              <img src={catImg10} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
