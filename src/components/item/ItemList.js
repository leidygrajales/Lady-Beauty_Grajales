import Item from './Item'

const ItemList = ({ listProducts, getItem, setItemDetail }) => {

    return (
        <>
            {listProducts.map((product, index) =>
                <Item key={index} product={product} getItem={getItem} setItemDetail={setItemDetail} />
            )}
        </>
    )
}

export default ItemList