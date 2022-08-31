import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../FireBase";

const Order = () => {

    const navigate = useNavigate()

    const [order, setOrder] = useState({})

    const { orderId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "orders", orderId);

        getDoc(docRef)
            .then((document) => {
                setOrder(document.data())
            })
            .catch((err) => {
                console.log(err);
            });
    }, [orderId])

    const { buyer, items, total, date } = order

    return (
        <div className="container-order">
            <div className="container-order__resume">
                <div className="container-order__resume-header">
                    <span>ID PEDIDO: {orderId}</span>
                </div>
                <hr />
                <div className="container-order__resume-body">
                    <div className="container-order__resume-body--resume__info">
                        <div className="container-order__resume-body--resume__info-row">
                            <span>FECHA: </span>
                            <span>{date}</span>
                        </div>
                        <div className="container-order__resume-body--resume__info-row">
                            <span>NOMBRE: </span>
                            <span>{buyer && buyer.name}</span>
                        </div>
                        <div className="container-order__resume-body--resume__info-row">
                            <span>E-MAIL: </span>
                            <span>{buyer && buyer.email}</span>
                        </div>
                        <div className="container-order__resume-body--resume__info-row">
                            <span>MÓVIL: </span>
                            <span>{buyer && buyer.phone}</span>
                        </div>
                        <hr />
                        <div className="container-order__resume-body--resume__info-row">
                            <span>CANTIDAD: </span>
                            <span>2</span>
                        </div>
                        <div className="container-order__resume-body--resume__info-row">
                            <span>SUBTOTAL: </span>
                            <span>{total}€</span>
                        </div>
                        <div className="container-order__resume-body--resume__info-row">
                            <span>TOTAL: </span>
                            <span>{total}€</span>
                        </div>
                    </div>
                    <div className="container-order__resume-body--products__info">
                        <div className="container-order__resume-body--products__info-table">
                            <div className="container-order__resume-body--products__info-table__header">
                                <span>Producto</span>
                                <span>Cantidad</span>
                                <span>Valor Unitario</span>
                                <span>Total</span>
                            </div>
                            {
                                items && items.map((item, i) => (
                                    <div className="container-order__resume-body--products__info-table__body__row" key={i}>
                                        <div className="container-order__resume-body--products__info-table__body__row-cell">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="container-order__resume-body--products__info-table__body__row-cell">
                                            <p>{item.quantity}</p>
                                        </div>
                                        <div className="container-order__resume-body--products__info-table__body__row-cell">
                                            <p>{item.price}€</p>
                                        </div>

                                        <div className="container-order__resume-body--products__info-table__body__row-cell">
                                            <p>{+item.quantity * +item.price}€</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="container-order__resume-controls">
                    <button
                        className="container-order__resume-controls__return"
                        onClick={() => navigate(`/products/all`)}
                    >
                        Seguir comprando
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Order