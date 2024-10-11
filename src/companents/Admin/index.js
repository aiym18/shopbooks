import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const { setmodal, setModal } = useContext(BookShopContext);
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const arror = () => {
    toast.error("Неправильный пароль!", {
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
  const navigate = () => {
    if (password === "123") {
      nav(`/addProduct`);
      setModal(false);
    } else {
      arror();
    }
  };
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h3 onClick={() => setModal(false)}>X</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password.."
          />
          <button onClick={() => navigate()}>SIGN IN</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
