import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RelatedProducts.css';

const RelatedProducts = ({ category, currentId }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        const filtered = response.data.products.filter(p => p.id !== currentId);
        setRelated(filtered);
      } catch (error) {
        console.error("Related fetch error", error);
      }
    };
    if (category) fetchRelated();
  }, [category]);

  const scrollToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  };

  return (
    <div className="related__products">
        <div className="related__products__header">
      <h1>You may also like</h1>
      </div>
      <div className="related__products__grid">
        {related.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id} className="related__card" onClick={scrollToTop}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
            <span>{item.price} GEL</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
