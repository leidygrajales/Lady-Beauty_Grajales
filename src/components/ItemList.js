import Item from './Item'

const ItemList = ({ listProducts, getItem, setItemDetail, setLoadingDetail }) => {

    return (
        <>
            {listProducts.map((product, index) =>
                <Item key={index} product={product} getItem={getItem} setItemDetail={setItemDetail} setLoadingDetail={setLoadingDetail} />
            )}
        </>
    )
}

export default ItemList