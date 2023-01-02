import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";


function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      <Routes>
          <Route path="/single-product" element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
