import { useState } from "react";
export default function App() {
  const [productList, setProductList] = useState([
    "pasta",
    "insalata",
    "frutta",
    "pollo",
  ]);

  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setProductList((currentState) => [...currentState, product]);

    setProduct("");
  };

  const handleField = (e) => {
    setProduct(e.target.value);
    console.log(product);
  };
}
