import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { MdDeleteOutline } from "react-icons/md";
// import { FaShopify } from "react-icons/fa";

const BooksDetalis = () => {
  const nav = useNavigate();
  const { productAll, setProductAll, basket, setBasket } =
    useContext(BookShopContext);
  const [more, setMore] = useState(4);
  const [sortet, setSortet] = useState("");
  // const [logoBasket, setLogoBasket] = useState(false);

  let booksort = productAll.sort((a, b) => {
    if (sortet === "A-Z") {
      return a.name.localeCompare(b.name);
    } else if (sortet === "Z-A") {
      return b.name.localeCompare(a.name);
    }else if(sortet ==="cheap"){
      return a.price -b.price
    }else if(sortet ==="expensive"){
      return b.price -a.price
    }
  });

  const DeleteProduct = (data) => {
    let detelePro = productAll.filter((el) => el.id !== data.id);
    localStorage.setItem("product", JSON.stringify(detelePro));
    setProductAll(detelePro);
  };
  const addBasket = (data) => {
    // setLogoBasket(true);
    let findBasket = basket.find((el) => el.id === data.id);
    if (!findBasket) {
      let res = [...basket, data];
      localStorage.setItem("basket", JSON.stringify(res));
      setBasket(res);
    }
  };

  

  // let logoBasket = basket.some((el) => el.id === el.id);

  return (
    <div id="booksdetalis">
      <div className="container">
        <div className="select">
          <h1>Возможно, Вам понравится</h1>
          <select onChange={(e) => setSortet(e.target.value)}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="expensive">Expensive</option>
            <option value="cheap">Cheap</option>
          </select>
        </div>
        <div className="booksdetalis">
          {booksort.slice(0, more).map((el) => (
            <div className="booksdetalis--tex">
              <Link to={`/detalis/${el.id}`}>
                <img src={el.url} alt="img" />
              </Link>
              <div className="booksdetalis--tex__basket">
                <h3>{el.price}</h3>
                <SlBasketLoaded
                    className="bas"
                    onClick={() => addBasket(el)}
                  />
                {/* {!logoBasket ? (
                  <SlBasketLoaded
                    className="bas"
                    onClick={() => addBasket(el)}
                  />
                ) : (
                  <FaShopify onClick={() => nav("/basket")} />
                )} */}
              </div>
              <div className="booksdetalis--tex__detels">
                <h3>{el.name}</h3>
                <MdDeleteOutline
                  className="bas"
                  onClick={() => DeleteProduct(el)}
                />
              </div>
            </div>
          ))}
        </div>
        {productAll.length > more ? (
          <button onClick={() => setMore()}>Показать ещё</button>
        ) : productAll.length < 4 ? null : (
          <button onClick={() => setMore(4)}>short</button>
        )}
      </div>
    </div>
  );
};

export default BooksDetalis;
