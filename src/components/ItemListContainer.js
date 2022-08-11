import ItemList from "./ItemList"
import ItemDetailContainer from "./ItemDetailContainer"
import Spinner from "./Spinner";

import { useEffect, useState } from "react"

const ItemListContainer = ({ greeting }) => {

  const products = [
    {
      title: 'Paleta de sombras',
      img: 'https://revistamomentos.co/wp-content/uploads/2016/10/Cuarteto-1900x2615_c.png',
      description: 'Descripcion producto 1',
      price: 35,
      stock: 10,
      initial: 0
    },
    {
      title: 'Pulsera',
      img: 'https://www.prcasanova.com/pulsera-elvine.jpg',
      description: 'Descripcion producto 2',
      price: 50,
      stock: 5,
      initial: 0
    }
  ]

  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false)

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

  const [loadingDetail, setLoadingDetail] = useState(false)
  const [itemDetail, setItemDetail] = useState({})

  const getItem = (product) => {
    setIsModalDetailVisible(true)
    setLoadingDetail(true)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product)
      }, 2000);
    });

  }

  const handleCloseModalDetail = () => {
    setIsModalDetailVisible(false)
    setItemDetail({})
  }

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
        {loading ?
          <Spinner className={'centered'} description={'Cargando Productos'} /> :
          <ItemList
            listProducts={listProducts}
            getItem={getItem}
            setItemDetail={setItemDetail}
            setLoadingDetail={setLoadingDetail} />
        }
      </div>

      <ItemDetailContainer
        visible={isModalDetailVisible}
        handleCloseModalDetail={handleCloseModalDetail}
        itemDetail={itemDetail}
        loadingDetail={loadingDetail} />
    </div>
  )
}
export default ItemListContainer