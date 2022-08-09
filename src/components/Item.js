import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'


const Item = ({ product: { initial, stock, title }, onAdd }) => {

    const [value, setValue] = useState(initial <= stock ? initial : stock)

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


    return (
        <div className="item-count">
            <div className="item-count--header">
                <h3>{title}</h3>
                <button>
                    <FontAwesomeIcon icon={faInfo} />
                </button>
            </div>
            <img className="item-count--img" src="/logo192.png" alt="" />
            <div className="item-count--controls">
                <button className="item-count--controls__subtract" onClick={substractItem}>-</button>
                <input className="item-count--controls__input" type="number" min={0} value={value} onChange={handleChangeInput} />
                <button className="item-count--controls__add" onClick={addItem}>+</button>
            </div>
            <button disabled={stock === 0 || value === 0} className="item-count--add-cart" onClick={() => onAdd(value)}>Agregar al carrito</button>
        </div>
    )
}

export default Item