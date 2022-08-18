import Item from './Item'

const ItemList = ({ listProducts, cart, setCart }) => {

    return (
        <>
            {listProducts.map((product, index) =>
                <Item key={index} product={product} cart={cart} setCart={setCart} />
            )}
        </>
    )
}

export default ItemList