import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import { useParams } from "react-router-dom";

const Search = () => {
  const { productAll, setProductAll, searchProduct } =
    useContext(BookShopContext);
  const { searchId } = useParams();
  const search = productAll.filter((el) => el.name === searchId);
  console.log(search);
  return (
    <div id="search">
      <div className="container">
      <h1>Search</h1>
        <div className="search">
          
          {search.map((el) => (
            <div className="search--card">
              <img src={el.url} alt="img" />
              <h1> The name of Book : {el.name.toUpperCase()}</h1>
              <h4> Price : {el.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
