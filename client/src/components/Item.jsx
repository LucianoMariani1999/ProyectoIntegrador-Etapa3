import React, { useContext} from "react";
import { CartContext} from "./ShoppingCartContext.jsx"


export const Item = ({name, price, id, img}) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div className="nombre">{name}</div>
      <img src={img} width="80" height="55" />
      <div className="item-price">${price}</div>
      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          Añadir al Carrito
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          Añadir (+1)
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          Eliminar Item
        </button>
      )}
    </div>
  );
};

