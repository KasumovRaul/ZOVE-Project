import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../spinner/Spinner";
import "./ProductDetails.css";
import RelatedProducts from "../relatedProducts/RelatedProducts";
import SizeModal from "../sizeModal/SizeModal";
import { useBag } from "../BAGContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToBag } = useBag();

  const handleModalOpen = () => {
    setShowSizeModal(true);
  };

  const handleModalClose = () => {
    setShowSizeModal(false);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("error fetching product", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".size-btn") &&
        !event.target.closest(".size-selector-content")
      ) {
      }
    };

    return () => {
      document.addEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showSizeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  //!Toastfy Message  and ADD TO BAG
  const handleADD = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to the Bag!");
    } else {
      addToBag({ ...product, selectedSize: selectedSize }); // ürüne seçilen beden eklendi
      toast.success("Item added to the Bag Successfully..");
    }
  };


  //choice size && cancel
  const handleSizeSelect = (size) => {
   if(selectedSize === size){
     setSelectedSize(null);
   } else{
    setSelectedSize(size)
   }
  };

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  if (loading) return <Spinner />;

  return (
    <div className="product__details">
      <div className="product__details__container">
        <div className="product__details__left__sec">
          <div className="product__details__image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </div>
        <div className="product__details__right__sec">
          <div className="product__details__right__title">
            <p>{product.title}</p>
          </div>
          <div className="product__details__right__price">
            <strong>{product.price} GEL</strong>
          </div>
          <div className="product__details__right__item__code">
            <b>
              Product Code: <span>{product.id}</span>
            </b>
          </div>

          <div className="size-selector-content ">
            <ul className="size-selector-sizes">
              <li
                className={`size-selector ${selectedSize === "L" ? "selected" : "" }`} onClick={() => handleSizeSelect("L")} >L </li>

              <li
                className={`size-selector ${
                  selectedSize === "M" ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect("M")}
              >
                M
              </li>
              <li
                className={`size-selector ${
                  selectedSize === "S" ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect("S")}
              >
                S
              </li>
              <li
                className={`size-selector ${
                  selectedSize === "XL" ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect("XL")}
              >
                XL
              </li>
            </ul>
            <div className="size-recommend">
              <a href="#" className="size-rec" onClick={handleModalOpen}>
                SIZE RECOMMENDER
              </a>
            </div>
          </div>

          <div className="product__details__right__add__bag">
            <button onClick={handleADD}>Add</button>
          </div>
          <div className="product__details__right__desc">
            <span>{product.description}</span>
          </div>
        </div>
      </div>
      <RelatedProducts category={product.category} currentId={product.id} />
      {showSizeModal && (
        <SizeModal
          setShowSizeModal={setShowSizeModal}
          onClose={handleModalClose}
          productImage={product.thumbnail}
          productName={product.title}
          productId={product.id}
          productPrice={product.price}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
