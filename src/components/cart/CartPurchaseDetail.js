import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartPurchaseDetail = () => {

    const { GetCartQuantity, GetTotalCart, EmptyCart, FinishOrder } = useContext(CartContext)

    return (
        <div className="cart-container__purchase-detail">
            <div className="cart-container__purchase-detail__header">
                RESUMEN DE TU COMPRA
            </div>
            <hr />
            <div className="cart-container__purchase-detail__info">
                <div className="cart-container__purchase-detail__info-item">
                    <span>CANTIDAD PRODUCTOS</span>
                    <span>{GetCartQuantity()}</span>
                </div>
                <div className="cart-container__purchase-detail__info-item">
                    <span>SUBTOTAL</span>
                    <span>{GetTotalCart()}€</span>
                </div>
                <div className="cart-container__purchase-detail__info-item total">
                    <span>TOTAL</span>
                    <span>{GetTotalCart()}€</span>
                </div>
            </div>
            <div className="cart-container__purchase-detail__controls">
                <button className="cart-container__purchase-detail__controls-buy" onClick={FinishOrder}>COMPRAR</button>
                <button className="cart-container__purchase-detail__controls-clear" onClick={EmptyCart}>VACIAR CESTA</button>
            </div>
        </div>
    )
}

export default CartPurchaseDetail