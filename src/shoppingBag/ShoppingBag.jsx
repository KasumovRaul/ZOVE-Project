import React, { useEffect } from 'react'
import { useBag } from '../BAGContext'
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import './ShoppingBag.css'
import payImg from "../assets/google-pay.webp"

const ShoppingBag = () => {

  const {bagItems, removeFromBag, addToBag, selectedSize, calculateTotal} = useBag();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <>
    <div className="shop">
    <div className="container">
      <div className="shop__header">
        <h3>Shopping Bag [{bagItems.length}]</h3>
      </div>
        <div className="shop__content">
          {
            bagItems.length === 0 ? (
              <p>Your Shopping is empty. <span><MdOutlineShoppingBasket /></span></p>
            ) : (
              <div className="shop__grid__content">
                {
                  bagItems.map(item=>(
                    <div className="shop__grid__info">
                      <div className="shop__grid__img">
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div className="shop__grid__kpp">
                       <div className="shop__grid__title">
                          <span>{item.title}</span>
                       </div>
                       <div className="shop__size">
                          <p>Size: {item.selectedSize}</p>
                       </div>
                       <div className="shop__grid__price">
                         <span>{item.totalPrice} GEL</span>
                       </div>
                       <div className="shop__quantity__zds">
                    <div className="quantity__decrease" onClick={()=> removeFromBag(item.id, item.selectedSize)}>
                       <span><FiMinus />
                       </span>
                    </div>
                     <div className="shop__quantity__count">
                        <span>{item.count}</span>
                     </div>
                    <div className="quantity__increase" onClick={()=> addToBag(item)}>
                      <span><FiPlus />
                      </span>
                    </div>
                  </div>
                  </div>
                    </div>
                  ))
                }
                
              </div>
            )
          }
        </div>
    </div>
  

    <section>
       <div className="checkout-section">
         <div className="checkout-section-container">
         <div className="checkout-container">
      <div className="checkout-header">
        <h2>Auto Detailing</h2>
        <p></p>
      </div>

      <div className="checkout-summary">
        <div className="row">
          <span>Subtotal</span>
          <span>{calculateTotal().toFixed(0)}₾</span>
        </div>
        <div className="row">
          <span>Taxes</span>
          <span>{(calculateTotal() *0.18).toFixed(2)}₾</span>
        </div>
        <div className="row total">
          <span>Order total</span>
          <span>{(calculateTotal() * 1.18).toFixed(2)}₾</span>
        </div>
      </div>

      <button className="gpay-btn">
        <img
          src={payImg}
          alt="Google Pay"
        />
      </button>

      <div className="or">Or pay with card</div>

      <form className="checkout-form">
        <input type="email" placeholder="Email address for receipt" />

        <div className="phone-group">
          <select>
            <option value="+1">+1 United States</option>
            <option value="+44">+44 UK</option>
            <option value="+90">+90 Turkey</option>
            <option value="+995">+995 Georgia</option>

          </select>
          <input type="tel" placeholder="Phone number" />
        </div>

        <div className="name-group">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <div className="card-group">
          <input type="text" placeholder="Card number" />
          <input type="text" placeholder="MM/YY" />
          <input type="text" placeholder="CVV" />
        </div>

        <button className="pay-btn">{(calculateTotal() * 1.18).toFixed(3)} Pay </button>
      </form>
    </div>
         </div>
       </div>
    </section>
    </div>
    </>
  )
}

export default ShoppingBag