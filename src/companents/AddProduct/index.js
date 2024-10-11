import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const { productAll, setProductAll } = useContext(BookShopContext);
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const arror = () => {
    toast.error("Заполните !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImg(reader.result);
    reader.readAsDataURL(file);
  };
  const AddProduct = () => {
    if (
      productImg.trim() === "" ||
      productName.trim() === "" ||
      productCategory.trim() === "" ||
      productPrice.trim() === "" ||
      productDescription.trim() === ""
    ) {
      arror();
    } else {
      let newProduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productImg,
        name: productName,
        category: productCategory,
        price: productPrice,
        description: productDescription,
        quantity: 1,
      };
      let res = [...productAll, newProduct];
      localStorage.setItem("product", JSON.stringify(res));
      setProductAll(res);
    }

    // console.log(res);

    setProductImg("");
    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setProductDescription("");
  };
  // const addEnter = (e) => {
  //   if (e.key === "Enter") {
  //     AddProduct();
  //   }
  // };
  return (
    <div id="addproduct">
      <div className="container">
        <div className="addproduct">
          <input type="file" className="addproduct--file" onChange={onChange} />
          <div className="addproduct--right">
            <input
              type="text"
              placeholder="  Product Name"
              className="addproduct--right__name"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
            <div className="addproduct--right__flex">
              <input
                onChange={(e) => setProductCategory(e.target.value)}
                type="text"
                placeholder="  Category"
                className="addproduct--right__flex--category"
                value={productCategory}
              />
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
                type="text"
                placeholder="  Price"
                className="addproduct--right__flex--price"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Product description..."
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
              // onKeyDown={addEnter()}
            ></textarea>
            <button onClick={() => AddProduct()}>SAVE</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddProduct;
