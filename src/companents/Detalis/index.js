import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import { useParams } from "react-router-dom";

const Detalis = () => {
  const { productAll, setProductAll,basket,setBasket } = useContext(BookShopContext);
  let { bookID } = useParams();
  let bookfind = productAll.find((el) => el.id === +bookID);
  console.log(bookfind);
  const addBasket =(data)=>{
    let res=[...basket,data]
    localStorage.setItem("basket",JSON.stringify(res))
    setBasket(res)
  }
  return (
    <div id="detalis">
      <div className="container">
        <div className="detalis">
          <img src={bookfind?.url} alt="img" />
          <div className="detalis--tex">
            <h1>{bookfind?.name}</h1>
            <h3>{bookfind?.price}$</h3>
            <h4>{bookfind?.category}</h4>
            <h2>Описание</h2>
            <p>{bookfind?.description}</p>
            <div className="detalis--tex__btn">
              <button onClick={()=>addBasket(bookfind)}>Добавить в корзину</button>
              <button>Купить сейчас</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalis;
