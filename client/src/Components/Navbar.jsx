import React, { useContext, useState } from "react";
import "../Styles/Navbar.css";
import myntlogo from "../Assets/myntra.png";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileDropDown from "./DropDowns/ProfileDropDown";
import CategoryDd from "./DropDowns/CategoryDd";
import { BsBag,BsPerson, BsSearch, BsSuitHeart } from "react-icons/bs";
import {CiUser} from "react-icons/ci"
import { MyntraContext } from "./Context/MyContext";

const Navbar = () => {
  const [profileHover, setProfileHover] = useState(false);
  const [categryHover, setCategryHover] = useState(false);

  const route = useNavigate()
  const { state } = useContext(MyntraContext);

  const showProdDd = () => {
    setProfileHover(true);
  };
  const hideProfDd = () => {
    setProfileHover(false);
  };

  const showCategoryDd = () => {
    setCategryHover(true);
  };
  const hideCategoryDd = () => {
    setCategryHover(false);
  };


  return (
   
    <>
      {/* <!-- DropDown Profile --> */}
      {profileHover ? (
        <div
          style={{ zIndex: "9999" }}
          onMouseOver={showProdDd}
          onMouseLeave={hideProfDd}
        >
          <ProfileDropDown />
        </div>
      ) : null}

      {categryHover ? (
        <div onMouseOver={showCategoryDd} onMouseLeave={hideCategoryDd}>
          <CategoryDd />
        </div>
      ) : null}
      <div id='navbar'>
        <div id='inner_nav'>
          <div id='logo'>
            <div>
              {/* <img src='data:image/jpeg;base64,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' /> */}
              <img src={myntlogo}/>
            </div>
          </div>
          <div id='navi'>
            <p onClick={() => route('/allproducts')}
              onMouseOver={showCategoryDd}
              onMouseLeave={hideCategoryDd}>All</p>
            <p onClick={() => route('/menmyntra')}>MEN</p>
            <p onClick={() => route('/womenmyntra')}>WOMEN</p>
            <p onClick={() => route('/kidsmyntra')}>KIDS</p>
            <p onClick={() => route('/homeproductmyntra')}>HOME & LIVING</p>
            <p onClick={() => route('/beautymyntra')}>BEAUTY</p>
            <p>STUDIO<sup style={{color:'red'}}><small>NEW</small></sup></p>
          </div>
          <div id='search'>
            <div>
              <i class="fa-solid fa-magnifying-glass fa-sm"></i>
              <input type="text" placeholder="Search for products, brands and more" />
            </div>
          </div>
          <div id='nav_profile'>
            
              <div id='user_profile' onMouseOver={showProdDd} onMouseLeave={hideProfDd}>
                {/* <div><i class="fa-solid fa-user"></i></div> */}
                <BsPerson />
                <p><small>Profile</small></p>
              </div>
            <div id='wish'>
              {/* <i class="fa-solid fa-heart"></i> */}
              <BsSuitHeart />
              <p><small>Wishlist</small></p>
            </div>
            <div id='cart' onClick={() => route('/cart')}>
              {/* <i class="fa-solid fa-bag-shopping fa-sm"></i> */}
              <BsBag/>
              <p><small>Bag</small></p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};


export default Navbar;
