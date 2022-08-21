import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItemDetail from "./CartItemDetail";
import CartPurchaseDetail from "./CartPurchaseDetail";

const Cart = () => {

  const { cart, GetCartQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <div className="cart-container__header">
            <p>TU CESTA<span>&nbsp;({GetCartQuantity()} Productos)</span></p>
          </div>
          <div className="cart-container__body">
            <div className="cart-container__body--table">
              <div className="cart-container__body--table-header">
                <span></span>
                <span>Producto</span>
                <span>Precio</span>
                <span>Cantidad</span>
                <span>Total</span>
                <span></span>
              </div>
              <div className="cart-container__body--table-body">
                {
                  cart.map((item, index) => (
                    <CartItemDetail item={item} key={index} />
                  ))
                }
              </div>
            </div>
          </div>
          <CartPurchaseDetail />
        </>
      ) : (
        <>
          <div className="cart-container__header">
            <p>TU CESTA ESTÁ VACÍA</p>
          </div>
          <div className="cart-container__return">
            <p className="cart-container__return-text">
              Para comprar algún producto haz <span onClick={() => navigate('/products/All')}>click aquí</span>
            </p>
          </div>
        </>
      )
      }

    </div>
  )
}
export default Cart