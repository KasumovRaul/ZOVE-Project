import React, { useState } from "react";
import { useBag } from "../BAGContext";
import "./SizeModal.css";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const SizeModal = ({ onClose, productImage, productName, productId, productPrice }) => {
  const [section, setSection] = useState("Women");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [recommendedSize, setRecommended] = useState(null);
  const [formSubmitted, setFormSubmmitted] = useState(false);

  const { addToBag } = useBag();

  const getSizeRecommendation = () => {
    if (height < 160 && weight < 55) return "S";
    if (height >= 160 && height < 175 && weight >= 55 && weight <= 70) return "M";
    if (height >= 175 && height < 190 && weight > 70 && weight <= 85) return "L";
    if (height >= 190 || weight > 85) return "XL";
    return "Size Not Found";
  };
  

  const isFormValid = height > 0 && weight > 0 && age > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const size = getSizeRecommendation();
    setRecommended(size);
    setFormSubmmitted(true);
  };

  const handleAddToBag = () => {
    const productToAdd = {
      id: productId,
      thumbnail: productImage,
      title: productName,
      price: productPrice,
      selectedSize: recommendedSize,
    };

    addToBag(productToAdd);
    toast.success("The product added successfuly!");
    setTimeout(() => {
      onClose();
    }, 500);
    
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-size" onClick={(e) => e.stopPropagation()}>
        <div className="modal-size-content">
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-size-head">
          <h1>BASIC INFORMATION</h1>
        </div>
        <div className="modal-size-info">
          {!formSubmitted ? (
            <form className="form-modal" onSubmit={handleSubmit}>
              <div className="modal-fav">
                <label>Favourite Section</label>
                <select
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  className="modal-one"
                >
                  <option value="Woman">Woman</option>
                  <option value="Man">Man</option>
                </select>
              </div>
              <div className="modal-height">
                <label>Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(parseInt(e.target.value))}
                />
              </div>
              <div className="modal-weight">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                />
              </div>
              <div className="modal-age">
                <label>Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={!isFormValid}
              >
                Continue
              </button>
            </form>
          ) : (
            recommendedSize && (
              <div className="result">
                <div className="result-image-display">
                  <img src={productImage} alt="Selected product" />
                </div>
                <h3>
                  Recommended Size: <span>{recommendedSize}</span>
                </h3>
                <div className="result-info">
                  <h5>Height: {height} cm</h5>
                  <h5>Weight: {weight} kg</h5>
                  <h5>Age: {age} years</h5>
                </div>
                <div className="result-add-to-cart">
                  <button onClick={handleAddToBag}>ADD</button>
                </div>
              </div>
            )
          )}
        </div>
       
      </div>
    </div>
  );
};

export default SizeModal;
