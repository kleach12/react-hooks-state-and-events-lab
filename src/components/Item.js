import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState("true")

  function handleCart(){
    setAddToCart((addToCart) => !addToCart)
  }
  return (
    <li className= {addToCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{addToCart ? "Add to Cart" : "In Cart"}</button>
    </li>
  );
}

export default Item;
