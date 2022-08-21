import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../context/CartContext"
import ItemCounterControl from "./ItemCounterControl"

const ItemCount = ({ product, initial }) => {

    const { cart, AddItem, DeleteItem } = useContext(CartContext)

    const { stock, id } = product
    const [value, setValue] = useState(initial <= stock ? initial : stock)

    const addQuantity = () => {
        if (value < stock) {
            setValue(value + 1)
        }
    }

    const substractQuantity = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    const handleInputChange = ({ target }) => {
        const { value: iptValue } = target

        if (iptValue === "") {
            setValue(0)
        }

        if (+iptValue >= 0 && +iptValue <= stock) {
            setValue(+iptValue)
        }
    }

    return (
        <>
            <ItemCounterControl
                value={value}
                addQuantity={addQuantity}
                substractQuantity={substractQuantity}
                handleInputChange={handleInputChange}
            />
            <div className="item-count--secondary__controls">
                <button disabled={stock === 0 || value === 0} className="item-count--secondary__controls--add-cart" onClick={() => AddItem(product, value)}>
                    Agregar al carrito
                </button>
                {
                    <button disabled={cart.find((cartProduct) => cartProduct.id === id) === undefined} className="item-count--secondary__controls--remove-cart" onClick={() => {
                        DeleteItem(id)
                        setValue(0)
                    }}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                }

            </div>

        </>

    )

}

export default ItemCount