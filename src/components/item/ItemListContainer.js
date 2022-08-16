import ItemList from "./ItemList"
import ItemDetailContainer from "./itemDetail/ItemDetailContainer"
import Spinner from '../common/Spinner'

import { useEffect, useState } from "react"

const ItemListContainer = ({ greeting }) => {

  const products = [
    {
      title: 'Paleta de sombras multi-acabado Wet & Dry Malvalate',
      img: 'https://revistamomentos.co/wp-content/uploads/2016/10/Cuarteto-1900x2615_c.png',
      description: 'La revolución que necesitabas, sombras ultra pigmentadas de larga duración que cambian en contacto con el agua. Tecnología wet & dry: se puede usar en seco y con agua. En seco, tiene un acabado metalizado intenso y multidimensional, y en contacto con el agua, aporta un acabado satinado.',
      price: 19.50,
      stock: 10,
      initial: 0
    },
    {
      title: 'Pulsera',
      img: './img/pulsera.png',
      description: 'Lleva contigo una pulsera inspirada en las joyas creadas con semillas por la población nativa de la Reserva Nacional Tambopata en Perú. Baño de oro en tono bronce brillante de 24 quilates con piedras de alta bisutería en verde pastel. Largo aprox. 20 a 21 cm.',
      price: 50,
      stock: 3,
      initial: 0
    },
    {
      title: 'Contorno de ojos Extracto Divino',
      img: './img/extractodivino.png',
      description: 'Una crema para ojos, formulada con 10 poderosos ingredientes activos y Cáliz de Uchuva, que ayuda a disminuir los signos avanzados de la edad del contorno de ojos, con resultados sorprendentes y comprobados. ¡Para que luzcas una mirada llena de vida!',
      price: 50,
      stock: 8,
      initial: 0
    },
    {
      title: 'Control Blanc',
      img: './img/controlblanc.png',
      description: 'Una crema aclarante hidratante que protege y proporciona acción antiedad, para que la piel luzca con un tono más uniforme, totalmente radiante y luminosa',
      price: 38,
      stock: 9,
      initial: 0
    },
    {
      title: 'Polvos Compactos',
      img: './img/polvoscompactos.png',
      description: 'Si lo que quieres es un retoque para lucir más joven los polvos compactos antiedad Elixir de Vida son lo tuyo. Su aplicación brinda efectos inmediatos como el cubrimiento eficaz de imperfecciones de alta duración, difumina arrugas, líneas de expresión y poros dilatados, absorbe el exceso de grasa, y previene el envejecimiento prematuro causado por el sol. Además, es perfecto para todo tipo de cutis y edad.',
      price: 18,
      stock: 10,
      initial: 0
    },
    {
      title: 'Colorete compacto Champagne',
      img: './img/colorete.png',
      description: 'Para realzar con naturalidad tus expresiones, el Colorete Compacto es el producto que necesitas. Confía en su fórmula y solo deja que las partículas hagan su trabajo al tocar tu piel. ¡Prepárate para lucir un cutis lleno de vida!',
      price: 25,
      stock: 15,
      initial: 0
    },
    {
      title: 'Collar Largo Aupud',
      img: './img/collar.png',
      description: ' Vive el verano con un collar inspirado en la flor de Hibisco, llamada también Peregrina y Cayena. ¡Es súper versátil! Podrás llevarlo de diferentes formas y crear looks impactantes. Baño de oro en tono bronce semibrillante de 24 quilates. Largo aprox. 100 cm.',
      price: 38,
      stock: 13,
      initial: 0
    },
    {
      title: 'Limpiador 3 en 1 Energia Vital',
      img: './img/energiavital.png',
      description: 'LIMPIA y purifica la piel de toxinas y agentes contaminantes que se acumulan en la superficie, dejándola sin sensación de tirantez. EXFOLIA la piel con gránulos exfoliantes naturales que remueven las células muertas, dejándola más suave y luminosa día tras día. TONIFICA la piel, dejándola preparada para recibir los beneficios del gel hidratante.',
      price: 20,
      stock: 4,
      initial: 0
    }

  ]

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

  const handleCloseModalDetail = () => {
    setIsModalDetailVisible(false)
    setItemDetail({})
  }

  useEffect(() => {
    setLoading(true)

    getProducts(products)
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
          />
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