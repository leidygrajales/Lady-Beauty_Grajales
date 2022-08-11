import ItemDetail from "./ItemDetail"
import Spinner from './Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const ItemDetailContainer = ({ visible, handleCloseModalDetail, itemDetail, loadingDetail }) => {
    return (
        <div className={`modal-detail ${visible ? 'show' : 'hide'}`}>

            <div className="modal-detail__content">
                <span className="modal-detail__content--close" onClick={handleCloseModalDetail}> <FontAwesomeIcon icon={faXmark} /></span>
                {loadingDetail ?
                    <Spinner className={'centered'} description={'Cargando detalle...'} /> :
                    <ItemDetail itemDetail={itemDetail} />
                }

            </div>
        </div>
    )
}

export default ItemDetailContainer