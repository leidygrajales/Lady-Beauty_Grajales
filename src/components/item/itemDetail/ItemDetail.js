import { useContext } from 'react'
import ItemCount from '../../common/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ itemDetail }) => {

    const { cart } = useContext(CartContext)

    const { title, stock, description, price, img, id } = itemDetail

    return (
        <>
            <div className="modal-detail__content--img">
                <img src={img} alt="" />
            </div>
            <div className="modal-detail__content--info">
                <div className="modal-detail__content--info__header">
                    <h2>{title}</h2>
                </div>
                <br />
                <hr />
                <div className="modal-detail__content--info__body">
                    <div className="item-detail-info">
                        <p>Descripción:<span>&nbsp;{description}</span></p>
                        <p>Precio:<span>&nbsp;{price}€</span></p>
                        <p>Stock:<span>&nbsp;{stock}</span></p>
                    </div>
                </div>
                <div className="modal-detail__content--info__footer">
                    <ItemCount
                        product={itemDetail}
                        initial={cart.find((cartProduct) => cartProduct.id === id) ? cart.find((cartProduct) => cartProduct.id === id).quantity : 0}
                    />
                </div>
            </div>
        </>
    )
}

export default ItemDetail