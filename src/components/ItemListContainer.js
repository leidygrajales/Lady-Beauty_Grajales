import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {

  const onAdd = (quantity) => {
    alert(`Cantidad añadida: ${quantity}`)
  }

  return (
    <div className="container">

      <p className="container__text">{greeting}</p>

      <div className="container__item-list">
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
      </div>
    </div>
  )
}
export default ItemListContainer