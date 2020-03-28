import React from "react";

import { useCart } from "react-use-cart";

import { MdClose } from "react-icons/md";

const CartMenuContent = () => {
   const { isEmpty, items, removeItem } = useCart();

   if (isEmpty) {
      return <div>Your cart is empty</div>;
   }

   return (
      <table className="header__cart-content">
         <tbody>
            {items.map(item => (
               <tr className="header__cart-item" key={item.id}>
                  <td>
                     <img
                        src={`images/${item.image}`}
                        alt={item.name}
                        width="100"
                     />
                  </td>
                  <td>
                     <div>{item.name}</div>
                     <div>${(item.price * 0.01).toFixed(2)}</div>
                  </td>
                  <td>
                     <button
                        className="remove-item"
                        onClick={() => removeItem(item.id)}
                     >
                        <MdClose />
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default CartMenuContent;
