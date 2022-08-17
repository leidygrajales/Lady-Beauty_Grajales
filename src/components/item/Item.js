import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link } from 'react-router-dom';


import ItemCount from '../common/ItemCount'

const Item = ({ product }) => {

    const { title, img, id } = product

    const { categoryId } = useParams();

    return (
        <div className="item-count">
            <div className="item-count--header">
                <h3>{title}</h3>
                <Link to={`/products/${categoryId}/${id}`}>
                    <button>
                        <FontAwesomeIcon icon={faInfo} />
                    </button>
                </Link>

            </div>
            <img className="item-count--img" src={img} alt="" />
            <ItemCount product={product} />
        </div>
    )
}

export default Item