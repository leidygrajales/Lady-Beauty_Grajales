import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

import ItemCount from '../common/ItemCount'

const Item = ({ product, getItem, setItemDetail }) => {

    const { title, img } = product

    return (
        <div className="item-count">
            <div className="item-count--header">
                <h3>{title}</h3>
                <button onClick={() => {
                    getItem(product).then((data) => {
                        setItemDetail(data)
                    })
                }}>
                    <FontAwesomeIcon icon={faInfo} />
                </button>
            </div>
            <img className="item-count--img" src={img} alt="" />
            <ItemCount product={product} />
        </div>
    )
}

export default Item