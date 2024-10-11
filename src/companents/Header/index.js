import React, { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BookShopContext } from "../../context";
import Admin from "../Admin";

const Header = () => {
  const { modal, setModal,setSelect,setSearchProduct, searchProduct } = useContext(BookShopContext);
  // console.log(select,"kk");
  const nav = useNavigate();
  
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <h1>BOOKShop</h1>
          </Link>
          <div className="header--nav">
            <div className="header--nav__search">
            <select onChange={(e)=>setSelect(e.target.value)}>
            <option value="kgz">KGZ</option>
            <option value="rub">RUB</option>
            <option value="eur">EUR</option>
          </select>
              <input
                onChange={(e) => setSearchProduct(e.target.value)}
                type="text"
                placeholder="Search here"
                value={searchProduct}
              />
              <a className="header--nav__search--icon" href="">
                <IoSearchOutline />
              </a>
            </div>
            <button
              onClick={() => {
                nav(`/search/${searchProduct}`);
                setSearchProduct("")
              }}
            >
              Search
            </button>
            <Link to={"/basket"} className="header--nav__item">
              <FaShoppingCart /> <br />
              Корзина
            </Link>
            <Link className="header--nav__item" onClick={() => setModal(true)}>
              <FaRegUserCircle /> <br />
              Админ
            </Link>
          </div>
          {modal ? <Admin /> : null}
        </div>
      </div>
      {modal ? (
        <div className="bg" onClick={() => setModal(false)}></div>
      ) : null}
    </div>
  );
};

export default Header;
