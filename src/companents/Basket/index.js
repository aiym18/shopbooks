import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import { MdDeleteOutline } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basket, setBasket, select } = useContext(BookShopContext);
  const nav1 = useNavigate();
  const basDetele = (data) => {
    let deteleBas = basket.filter((el) => el.id !== data.id);
    setBasket(deteleBas);
    localStorage.setItem("basket", JSON.stringify(deteleBas));
  };
  const dicremenBas = (data) => {
    let res = basket.map((el) =>
      el.id === data.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    localStorage.setItem("basket", JSON.stringify(res));
    setBasket(res);
  };
  let totolPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  const incremenBas = (data) => {
    let res = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    localStorage.setItem("basket", JSON.stringify(res));
    setBasket(res);
  };

  // console.log(select);
  let valuta = 1;
  let changePrice = "";
  if (select === "kgz") {
    changePrice = "kgz";
    valuta = 89.6;
  } else if (select === "rub") {
    changePrice = "rub";
    valuta = 92.54;
  } else if (select === "eur") {
    valuta = 0.011;
    changePrice = "eur";
  }
  return (
    <div id="basket">
      <div className="container">
        {basket.length === 0 ? (
          <h1 onClick={() => nav1("/")}>
            <FaHome />
          </h1>
        ) : (
          <div className="basket">
            <div className="basket--text">{/* <h1>book</h1> */}</div>
            {basket.map((el) => (
              <div className="basket--cart">
                <img src={el.url} alt="img" />
                <div className="basket--cart__text">
                  <h4>{el.name}</h4>
                  <h5>
                    {el.price * el.quantity * valuta}
                    {changePrice}
                  </h5>
                  <div className="basket--cart__text--add">
                    <button onClick={() => dicremenBas(el)}>-</button>
                    <h2>{el.quantity}</h2>
                    <button onClick={() => incremenBas(el)}>+</button>
                  </div>
                  <div className="basket--cart__text--delete">
                    <h3>Удалить</h3>
                    <button onClick={() => basDetele(el)}>
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <h1>TotalPrice{totolPrice}</h1>
    </div>
  );
};

export default Basket;
