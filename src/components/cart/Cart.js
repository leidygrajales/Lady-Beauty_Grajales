import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItemDetail from "./CartItemDetail";
import CartPurchaseDetail from "./CartPurchaseDetail";

import Modal from '../common/Modal'
import { useState } from "react";

const Cart = () => {


  const { cart, GetCartQuantity, FinishOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const onBuy = () => {
    setIsModalVisible(true)
  }

  const handleSubmit = event => {
    event.preventDefault();
    setIsModalVisible(false)
    FinishOrder(buyer)
  };


  const handleChangeInput = ({ target: { value } }, type) => {
    setBuyer({
      ...buyer,
      [type]: value
    })
  }

  return (
    <>
      <div className="container-cart">
        {cart.length > 0 ? (
          <>
            <div className="container-cart__header">
              <p>TU CESTA<span>&nbsp;({GetCartQuantity()} Productos)</span></p>
            </div>
            <div className="container-cart__body">
              <div className="container-cart__body--table">
                <div className="container-cart__body--table-header">
                  <span></span>
                  <span>Producto</span>
                  <span>Precio</span>
                  <span>Cantidad</span>
                  <span>Total</span>
                  <span></span>
                </div>
                <div className="container-cart__body--table-body">
                  {
                    cart.map((item, index) => (
                      <CartItemDetail item={item} key={index} />
                    ))
                  }
                </div>
              </div>
            </div>

            <CartPurchaseDetail onBuy={onBuy} />

            <Modal visible={isModalVisible} onCloseModal={() => setIsModalVisible(false)}>
              <div className="modal-cart__content">

                <div className="modal-cart__content--title">
                  <span>DATOS DE USUARIO</span>
                </div>
                <hr />
                <form className="modal-cart__content--form" onSubmit={handleSubmit}>
                  <div className="modal-cart__content--form-row">
                    <label>NOMBRE: </label>
                    <input type={'text'} placeholder={'Ingresa tu nombre'} value={buyer.name} onChange={(e) => handleChangeInput(e, 'name')} required />
                  </div>
                  <div className="modal-cart__content--form-row">
                    <label>E-MAIL: </label>
                    <input type={'email'} placeholder={'Ingresa tu email'} value={buyer.email} onChange={(e) => handleChangeInput(e, 'email')} required />
                  </div>
                  <div className="modal-cart__content--form-row">
                    <label>MÓVIL: </label>
                    <input type={'number'} placeholder={'Ingresa tu móvil'} value={buyer.phone} onChange={(e) => handleChangeInput(e, 'phone')} required />
                  </div>

                  <div className="modal-cart__content--form__controls">
                    <button type={'submit'} className="modal-cart__content--form__controls-finish">Finalizar Compra</button>
                    <button type={'button'} className="modal-cart__content--form__controls-cancel" onClick={() => setIsModalVisible(false)}>Cancelar</button>
                  </div>
                </form>
              </div>
            </Modal>
          </>
        ) : (
          <>
            <div className="container-cart__header">
              <p>TU CESTA ESTÁ VACÍA</p>
            </div>
            <div className="container-cart__return">
              <p className="container-cart__return-text">
                Para comprar algún producto haz <span onClick={() => navigate('/products/all')}>click aquí</span>
              </p>
            </div>
          </>
        )}

      </div>

    </>

  )
}
export default Cart