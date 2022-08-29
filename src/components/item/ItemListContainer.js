import ItemList from "./ItemList"
import ItemDetailContainer from "./itemDetail/ItemDetailContainer"
import Spinner from '../common/Spinner'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { db } from "../../FireBase"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {

  const { categoryId, productId } = useParams();

  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false)

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const [loadingDetail, setLoadingDetail] = useState(false)
  const [itemDetail, setItemDetail] = useState({})

  const getProducts = (category) => {

    const productsRef = collection(db, "products")

    const consulta = category === 'all' ? getDocs(productsRef) : getDocs(query(productsRef, where("category", "==", category)));

    consulta
      .then(snapshot => {
        const Products = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
        setListProducts(Products)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getItem = async (productId) => {
    setIsModalDetailVisible(true)
    setLoadingDetail(true)

    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();

  }

  useEffect(() => {
    setLoading(true)
    getProducts(categoryId)
  }, [categoryId])

  useEffect(() => {
    if (productId) {
      getItem(productId).then((product) => {
        if (product) {
          setItemDetail(product)
          setLoadingDetail(false)
        } else {
          alert('Product not found')
        }
      })

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
          />
        }
      </div>

      <ItemDetailContainer
        visible={isModalDetailVisible}
        itemDetail={itemDetail}
        loadingDetail={loadingDetail}
      />
    </div>
  )
}
export default ItemListContainer