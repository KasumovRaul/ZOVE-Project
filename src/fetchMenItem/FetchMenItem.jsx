import React, { useEffect, useState } from 'react'
import { useProductContext } from '../ContextAPI'
import './FetchMenItem.css'
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
const FetchMenItem = () => {

    const {menProducts, loading} = useProductContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = menProducts.filter((item)=>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    if(loading) return <Spinner/>;

     

  return (

    <div>
       <div className="menitem-container">
        <div className="menitem-content">
        <ul className="header__bar">
            <Link to="/fetchWomen">
                <li className="bar__section">Women</li>
                </Link>
                <Link to="/fetchMen">
                <li className="bar__section">Man</li>
                </Link>
                <Link to='/fetchKids'>
                <li className="bar__section">Kids</li>
                </Link>
            </ul>     
            <div className="input-box">
                 <input type="search"
                  placeholder='What are you looking for?' 
                  id="input__id" aria-autocomplete='list'
                  autoComplete='off'
                  onChange={(e)=> setSearchTerm(e.target.value)}
                  value={searchTerm}  
                   />
               </div>
                 <section className="product__container">
                    <div className="product__mdb">
                        <div className="product__head">
                        <h2>Men Shirts {searchTerm.trim() && `- Results [${filteredProducts.length}]`}</h2>
                        </div>
                        <div className="product__list">
                           {
                            filteredProducts.length > 0 ?  (
                                filteredProducts.map((item)=>(
                                    <Link to={`/details/${item.id}`} className="product__list__info" key={item.id}>
                                       <div className="product__img" >
                                           <img src={item.thumbnail} alt={item.title} />
                                       </div>
                                       <div className="product__title">
                                           <h5>{item.title}</h5>
                                       </div>
                                       <div className="product__price">
                                           <strong>{item.price} GEL</strong>
                                       </div>
                                    </Link>
                                   ))
                            ) : (
                                <span className='mes-cd'>Not Found product..</span>
                            )
                           
                           }
                        </div>
                    </div>
                 </section> 
     </div>    
    </div>     
    </div>
  )
}

export default FetchMenItem