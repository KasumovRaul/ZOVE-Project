import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./FetchWomenItem.css";
import { useProductContext } from "../ContextAPI";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";


const FetchWomenItem = () => {
  const [openSizeId, setOpenSizeId] = useState(null);
  const { womenProducts, loading } = useProductContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSize = (id) => {
    setOpenSizeId((prevId) => (prevId === id ? null : id));
  };

  const filteredWomProducts = womenProducts.filter((item)=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


   useEffect(()=>{
         window.scrollTo(0,0);
     },[]);

     if (loading) return <Spinner />;


  return (
    <div>
      <header className="header__std">
        <div className="header__main">
          <ul className="header__bar">
            <Link to="/fetchWomen">
              <li className="bar__section">Women</li>
            </Link>
            <Link to="/fetchMen">
              <li className="bar__section">Man</li>
            </Link>
            <Link to="/fetchKids">
              <li className="bar__section">Kids</li>
            </Link>
          </ul>
          <div className="input-box">
            <input
              type="search"
              placeholder="What are you looking for?"
              id="input__id"
              aria-autocomplete="list"
              autoComplete="off"
              onChange={(e)=>setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
          <section className="product__container">
            <div className="product__mdb">
              <div className="product__head">
                <h2>Women Dresses{searchTerm.trim() && `- Results [${filteredWomProducts.length}]` }</h2>
              </div>
              <div className="product__list">
                {
                 filteredWomProducts.length > 0 ? (
                  filteredWomProducts.map((item) => (
                    <div className="product__list__info" key={item.id}>
                      <Link to={`/details/${item.id}`}>
                        <div className="product__img">
                          <img src={item.thumbnail} alt={item.title} />
                        </div>
                      </Link>
                     
                      <div className="product-info">
                        <div className="product__title">
                          <h5>{item.title}</h5>
                        </div>
                        <div className="product__price">
                          <strong>{item.price} GEL</strong>
                        </div>
                      </div>
                    </div>
                  ))
                 ) : (
                   <span className="mes-cd">Not Found Products</span>
                 )
              }
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
};

export default FetchWomenItem;
