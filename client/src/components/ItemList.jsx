
import React from "react";
import ProductsCart from "./products.json";
import {Item} from "./Item.jsx";

export const ProductList = () => {
	return (
	  <div className="items-list">
		{ProductsCart.map((product, idx) => {
		  return <Item key={product.id} {...product} />;
		})}
	  </div>
	);
  };
