import Item from './Item'

const ItemList = ({ listProducts }) => {

    return (
        <>
            {listProducts.map((product, index) =>
                <Item key={index} product={product} />
            )}
        </>
    )
}

export default ItemList