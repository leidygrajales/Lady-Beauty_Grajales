import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const ItemCount = ({ product, initial, cart, setCart }) => {

    const { stock, id } = product
    const [value, setValue] = useState(initial <= stock ? initial : stock)

    const onAdd = () => {

        let productToAdd = cart.find((cartProduct) => cartProduct.id === id)

        if (!productToAdd) {
            productToAdd = { ...product, quantity: value }
            setCart([...cart, productToAdd])
        } else {
            productToAdd.quantity = value
            setCart([...cart])
        }
    }


    const substractItem = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    const handleChangeInput = ({ target }) => {
        const { value: iptValue } = target

        if (iptValue === "") {
            setValue(0)
        }

        if (+iptValue >= 0 && +iptValue <= stock) {
            setValue(+iptValue)
        }
    }

    const addItem = () => {
        if (value < stock) {
            setValue(value + 1)
        }
    }

    const removeItem = () => {
        const filteredData = cart.filter((obj) => obj.id !== id)
        setCart(filteredData)
        setValue(0)
    }

    return (
        <>
            <div className="item-count--controls">
                <button className="item-count--controls__subtract" onClick={substractItem}>-</button>
                <input className="item-count--controls__input" type="number" min={0} value={value} onChange={handleChangeInput} />
                <button className="item-count--controls__add" onClick={addItem}>+</button>
            </div>
            <div className="item-count--secondary__controls">
                <button disabled={stock === 0 || value === 0} className="item-count--secondary__controls--add-cart" onClick={onAdd}>
                    Agregar al carrito
                </button>
                {
                    <button disabled={cart.find((cartProduct) => cartProduct.id === id) === undefined} className="item-count--secondary__controls--remove-cart" onClick={removeItem}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                }

            </div>

        </>

    )

}

export default ItemCount