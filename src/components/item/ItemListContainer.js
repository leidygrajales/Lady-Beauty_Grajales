import ItemList from "./ItemList"
import ItemDetailContainer from "./itemDetail/ItemDetailContainer"
import Spinner from '../common/Spinner'
import Container from "../Container";
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

  const [loadingCatDesc, setLoadingCatDesc] = useState(false)
  const [catDesc, setCatDesc] = useState('')


  const getCategoryDescription = () => {

    setLoadingCatDesc(true)

    const categoriesRef = collection(db, "categories")
    const consulta = getDocs(query(categoriesRef))



    consulta
      .then(snapshot => {
        setCatDesc(snapshot.docs.find((doc) => doc.id === categoryId).data().description)
        setLoadingCatDesc(false)
      })
      .catch(err => {
        console.log(err)
      })

  }

  const getProducts = (category) => {

    const productsRef = collection(db, "products")

    const consulta = category === 'all' ? getDocs(query(productsRef, where("novelty", "==", true))) : getDocs(query(productsRef, where("category", "==", category)));

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
    getCategoryDescription()
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

  return (
    <div className="container-items">
      {categoryId == 'all' && !loading && <Container />}
      {!loading && <p className="container-items__text">{catDesc}</p>}

      <div className="container-items__item-list">
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