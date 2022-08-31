import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartPurchaseDetail = ({ onBuy }) => {

    const { GetCartQuantity, GetTotalCart, EmptyCart } = useContext(CartContext)

    return (
        <div className="container-cart__purchase-detail">
            <div className="container-cart__purchase-detail__header">
                RESUMEN DE TU COMPRA
            </div>
            <hr />
            <div className="container-cart__purchase-detail__info">
                <div className="container-cart__purchase-detail__info-item">
                    <span>CANTIDAD PRODUCTOS</span>
                    <span>{GetCartQuantity()}</span>
                </div>
                <div className="container-cart__purchase-detail__info-item">
                    <span>SUBTOTAL</span>
                    <span>{GetTotalCart()}€</span>
                </div>
                <div className="container-cart__purchase-detail__info-item total">
                    <span>TOTAL</span>
                    <span>{GetTotalCart()}€</span>
                </div>
            </div>
            <div className="container-cart__purchase-detail__controls">
                <button className="container-cart__purchase-detail__controls-buy" onClick={() => onBuy()}>COMPRAR</button>
                <button className="container-cart__purchase-detail__controls-clear" onClick={EmptyCart}>VACIAR CESTA</button>
            </div>
        </div>
    )
}

export default CartPurchaseDetail