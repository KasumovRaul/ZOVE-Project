import { createContext, useContext, useEffect, useState } from "react";

const BagContext = createContext();

export const BagProvider = ({children}) =>{
    const [bagItems, setBagItems] = useState([]);

    useEffect(()=>{
        try {
          const saved = localStorage.getItem('bagItems');
          if (saved) setBagItems(JSON.parse(saved));
        } catch (error) {
          console.error("LocalStorage error");
          
        }
    },[]);

    
    useEffect(()=>{
         localStorage.setItem("bagItems", JSON.stringify(bagItems));
    },[bagItems]);


    const addToBag = (product) => {
        setBagItems((prev) => {
            // Ürünün id'sine ve boyutuna göre arama yapıyoruz
            const existingItem = prev.find((item) => 
                item.id === product.id && item.selectedSize === product.selectedSize
            );
            
            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id && item.selectedSize === product.selectedSize
                        ? { 
                            ...item, 
                            count: item.count + 1,
                            totalPrice: ((item.count + 1) * Number(item.price)).toFixed(0)
                        }
                        : item
                );
            } else {
                return [
                    ...prev,
                    { 
                        ...product, 
                        count: 1,
                        totalPrice: parseFloat(product.price) 
                    }
                ]; 
            }
        });
    };
    

    const removeFromBag = (id, selectedSize) => {
        setBagItems((prev) => {
          const existingItem = prev.find(
            (item) => item.id === id && item.selectedSize === selectedSize
          );
      
          // Eğer eşleşen ürün yoksa veya selectedSize gelmemişse hiç dokunma
          if (!existingItem) return prev;
      
          if (existingItem.count > 1) {
            return prev.map((item) =>
              item.id === id && item.selectedSize === selectedSize
                ? {
                    ...item,
                    count: item.count - 1,
                    totalPrice: ((item.count - 1) * item.price).toFixed(0),
                  }
                : item
            );
          } else {
            // Count 1 ise ürünü sepetten çıkar
            return prev.filter(
              (item) =>
                !(item.id === id && item.selectedSize === selectedSize)
            );
          }
        });
      };
      
    
      //checkout
      const calculateTotal =() =>{
        return bagItems.reduce((acc, item)=> acc + Number(item.totalPrice),0);
      };

    return (
        <BagContext.Provider value={{bagItems, addToBag, removeFromBag, calculateTotal}}>
            {children}
        </BagContext.Provider>
    )
};

export const useBag = () => useContext(BagContext);