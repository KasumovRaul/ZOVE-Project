import React, { useEffect, useState } from 'react'
import { useProductContext } from '../ContextAPI'
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import './FetchKids.css'
const FetchKids = () => {

    const {kidsShoes, loading} = useProductContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredKidProducts = kidsShoes.filter((item)=>
     item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);


    if(loading) return <Spinner/>;

  
  return (
       <div>
           <div className="kidsitem-container">
            <div className="kidsitem-content">
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
                      id="input__id"
                       aria-autocomplete='list'
                      autoComplete='off'
                      onChange={(e)=> setSearchTerm(e.target.value)}
                      value={searchTerm}   
                        />
                   </div>
                     <section className="product__container">
                        <div className="product__mdb">
                            <div className="product__head">
                                <h2>Kids Shoes {searchTerm.trim() && `- Results [${filteredKidProducts.length}]`}</h2>
                            </div>
                            <div className="product__list">
                               {
                                filteredKidProducts.length > 0 ? (
                                    filteredKidProducts.map((item)=>(
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
                                    <span>Not Found Product..</span>
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

export default FetchKids