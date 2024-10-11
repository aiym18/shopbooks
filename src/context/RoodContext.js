import React, { useEffect, useState } from "react";
import { BookShopContext } from ".";

const RoodContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [productAll, setProductAll] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [basket, setBasket] = useState([]);
  const [select,setSelect]=useState("")
  const locProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res);
    let result = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(result);
  };
  useEffect(() => {
    locProduct();
  }, []);
  return (
    <BookShopContext.Provider
      value={{
        select,
        setSelect,
        modal,
        searchProduct,
        setSearchProduct,
        setModal,
        productAll,
        setProductAll,
        basket,
        setBasket,
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
};

export default RoodContext;
