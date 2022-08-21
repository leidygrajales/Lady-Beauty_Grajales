import ItemDetail from "./ItemDetail"
import Spinner from '../../common/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link } from 'react-router-dom';


const ItemDetailContainer = ({ visible, itemDetail, loadingDetail }) => {

    const { categoryId } = useParams();

    return (
        <div className={`modal-detail ${visible ? 'show' : 'hide'}`}>

            <div className="modal-detail__content">
                <Link to={`/products/${categoryId}`} className="modal-detail__content--close">
                    <FontAwesomeIcon icon={faXmark} />
                </Link>

                {loadingDetail ?
                    <Spinner className={'centered'} description={'Cargando detalle...'} /> :
                    <ItemDetail itemDetail={itemDetail} />
                }

            </div>
        </div>
    )
}

export default ItemDetailContainer