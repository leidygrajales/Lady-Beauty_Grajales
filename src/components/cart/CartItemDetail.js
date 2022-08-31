import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCounterControl from "../common/ItemCounterControl";

const CartItemDetail = ({ item }) => {
    const { GetTotalItem, AddProductQuantity, SubstractProductQuantity, AddItem, DeleteItem } = useContext(CartContext);
    const { quantity, id } = item

    const handleInputChange = ({ target }, item) => {
        const { value: iptValue } = target

        const { stock } = item

        if (iptValue === "") {
            AddItem(item, 0)
        }

        if (+iptValue >= 0 && +iptValue <= stock) {
            AddItem(item, +iptValue)
        }
    }

    return (
        <div className="container-cart__body--table-body__row">
            <div className="container-cart__body--table-body__row-cell">
                <img className="container-cart__body--table-body__row-cell__image" src={item.img} alt="" />
            </div>
            <div className="container-cart__body--table-body__row-cell">
                {item.title}
            </div>
            <div className="container-cart__body--table-body__row-cell">
                {item.price}€
            </div>
            <div className="container-cart__body--table-body__row-cell">
                <ItemCounterControl
                    value={quantity}
                    addQuantity={() => AddProductQuantity(item)}
                    substractQuantity={() => SubstractProductQuantity(item)}
                    handleInputChange={(e) => handleInputChange(e, item)}
                />
            </div>
            <div className="container-cart__body--table-body__row-cell">
                {GetTotalItem(item)}€
            </div>
            <div className="container-cart__body--table-body__row-cell">
                <span className='container-cart__body--table-body__row-cell__trash-icon' onClick={() => DeleteItem(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </span>
            </div>
        </div>
    )
}

export default CartItemDetail