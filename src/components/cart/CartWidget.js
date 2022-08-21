import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart, GetCartQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <span className='header__top--icon' onClick={() => navigate('/cart')}>
            <FontAwesomeIcon icon={faCartShopping} />
            {
                cart.length > 0 && <span className='header__top--icon__counter'>{GetCartQuantity()}</span>
            }
        </span>
    )
}

export default CartWidget