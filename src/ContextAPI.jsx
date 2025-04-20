import { createContext, useContext, useEffect, useState,  } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    const [womenProducts, setWomenProducts] = useState([]);
    const [menProducts, setMenProducts] = useState([]);
    const [kidsShoes, setKidsShoes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
       const fetchAllProducts = async () =>{
         try {
            const [womenRes, MenRes, kidsShoes] = await Promise.all([
                axios.get('https://dummyjson.com/products/category/womens-dresses'),
                axios.get('https://dummyjson.com/products/category/mens-shirts'),
                axios.get('https://dummyjson.com/products/category/mens-shoes')
            ]);
 
            setWomenProducts(womenRes.data.products);
            setMenProducts(MenRes.data.products);
            setKidsShoes(kidsShoes.data.products);
         } catch (error) {
            console.error('error Fetching products', error);
         }finally{
            setLoading(false);
         }
       };
       fetchAllProducts();
    },[]);

    return (
        <ProductContext.Provider value={{womenProducts, menProducts, kidsShoes, loading}}>
            {children}
        </ProductContext.Provider>
    )
};

export const useProductContext = () => useContext(ProductContext);