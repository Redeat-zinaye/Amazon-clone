import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { FaBars } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";
import Navbar from "./Navbar";



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  return (
    <div> 
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <SlLocationPin />
      <div className="header__option">
          
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Select your address</span>
        </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/Login"} className="header__clearlink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>

    <div className="header__small">
        <div className="link-container">
          <ul>
            <li>
              {/* <Link to="./">
                <FaBars onClick={showSidebar} />All
                </Link> */}
              {<Navbar onClick={showSidebar} />}
              {sidebar && <Navbar />}
            </li>
            <li>
            <Link to="./">Best Sellers</Link>
            </li>
            <li>
            <Link to="./">Deals Store</Link>
            </li>
            <li>
            <Link to="./">Customer Service</Link>
            </li>
            <li>
            <Link to="./">New Releases</Link>
            </li>
            <li>
            <Link to="./">Prime</Link>
            </li>
            <li>
            <Link to="./">Sell</Link>
            </li>
            <li>
            <Link to="./">Electronics</Link>
            </li>
            <li>
            <Link to="./">Coupons</Link>
            </li>
            <li>
            <Link to="./">Books</Link>
            </li>
            <li>
            <Link to="./">Fashion</Link>
            </li>
            <li>
            <Link to="./">Toys&Games</Link>
            </li>
          </ul>
        </div>

        <div className="movie-link">
          <a href="#">
            <h1>
              Watch The Rings of Power
            </h1>
          </a>
        </div>
      </div>


    </div>
  );
}

export default Header;
