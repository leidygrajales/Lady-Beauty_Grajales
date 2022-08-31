import ItemDetail from "./ItemDetail"
import Spinner from '../../common/Spinner'
import { useParams, useNavigate } from 'react-router-dom';
import Modal from "../../common/Modal";


const ItemDetailContainer = ({ visible, itemDetail, loadingDetail }) => {
    const navigate = useNavigate();
    const { categoryId } = useParams();

    const onCloseModal = () => {
        navigate(`/products/${categoryId}`)
    }

    return (
        <Modal visible={visible} onCloseModal={onCloseModal}>
            {loadingDetail ?
                <Spinner className={'centered'} description={'Cargando detalle...'} /> :
                <ItemDetail itemDetail={itemDetail} />
            }
        </Modal>
    )
}

export default ItemDetailContainer