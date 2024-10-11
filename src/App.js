import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./companents/Header";
import Hero from "./companents/Hero";
import Basket from "./companents/Basket";
import AddProduct from "./companents/AddProduct";
import Footer from "./companents/Footer";
import Detalis from "./companents/Detalis";
import Search from "./companents/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{
        minHeight: '100vh'
      }}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/search/:searchId" element={<Search/>} />
        <Route path="/detalis/:searchId" element={<Detalis/>} />
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
