import "./App.css";
import { CardContainer } from "./components/Cards/CardContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
