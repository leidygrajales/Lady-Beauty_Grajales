import ItemList from "./ItemList"
import { useEffect, useState } from "react"

const ItemListContainer = ({ greeting }) => {

  const products = [
    {
      title: 'Producto 1',
      stock: 10,
      initial: 0
    },
    {
      title: 'Producto 2',
      stock: 5,
      initial: 0
    }
  ]

  const onAdd = (quantity) => {
    alert(`Cantidad añadida: ${quantity}`)
  }

  const product = (products) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
  }

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {

    setLoading(true)

    product(products)
      .then(data => {
        setListProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">

      <p className="container__text">{greeting}</p>

      <div className="container__item-list">
        {loading ? 'Cargando...' : <ItemList listProducts={listProducts} />}
      </div>
    </div>
  )
}
export default ItemListContainer