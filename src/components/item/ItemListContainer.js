import ItemList from "./ItemList"
import ItemDetailContainer from "./itemDetail/ItemDetailContainer"
import Spinner from '../common/Spinner'
import { useParams } from 'react-router-dom';

import { useEffect, useState } from "react"

const ItemListContainer = ({ products, cart, setCart }) => {

  const { categoryId, productId } = useParams();

  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false)

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const [loadingDetail, setLoadingDetail] = useState(false)
  const [itemDetail, setItemDetail] = useState({})

  const getProducts = (products) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
  }

  const getItem = (product) => {
    setIsModalDetailVisible(true)
    setLoadingDetail(true)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoadingDetail(false)
        resolve(product)
      }, 2000);
    });

  }

  useEffect(() => {
    setLoading(true)
    getProducts(products)
      .then(data => {
        if (categoryId !== 'All') {
          const filteredData = data.filter((item) => item.category === categoryId)
          setListProducts(filteredData)
        } else {
          setListProducts(data)
        }
        setLoading(false)
      })

  }, [categoryId])

  useEffect(() => {
    if (productId) {
      const product = products.find((product) => product.id === +productId)
      if (product) {
        getItem(product).then((data) => {
          setItemDetail(data)
        })
      } else {
        alert('Product not found')
      }
    } else {
      setIsModalDetailVisible(false)
      setItemDetail({})
    }
  }, [productId])

  useEffect(() => {
    const body = document.querySelector("#root");

    if (isModalDetailVisible) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "initial";
    }

  }, [isModalDetailVisible])

  return (
    <div className="container">

      <p className="container__text">{'Home'}</p>

      <div className="container__item-list">
        {loading ?
          <Spinner className={'centered'} description={'Cargando Productos'} /> :
          <ItemList
            listProducts={listProducts}
            cart={cart}
            setCart={setCart}
          />
        }
      </div>

      <ItemDetailContainer
        visible={isModalDetailVisible}
        itemDetail={itemDetail}
        loadingDetail={loadingDetail}
        cart={cart}
        setCart={setCart}
      />
    </div>
  )
}
export default ItemListContainer