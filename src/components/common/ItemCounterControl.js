const ItemCounterControl = ({ value, addQuantity, substractQuantity, handleInputChange }) => {

    return (
        <div className="item-count--controls">
            <button className="item-count--controls__subtract" onClick={substractQuantity}>-</button>
            <input className="item-count--controls__input" type="number" min={0} value={value} onChange={handleInputChange} />
            <button className="item-count--controls__add" onClick={addQuantity}>+</button>
        </div>
    )


}

export default ItemCounterControl