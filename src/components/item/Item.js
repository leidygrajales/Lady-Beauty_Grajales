import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link } from 'react-router-dom';


import ItemCount from '../common/ItemCount'
import { useState } from 'react';
import { useEffect } from 'react';

const Item = ({ product, cart, setCart }) => {

    const { title, img, id } = product
    const { categoryId } = useParams();

    useEffect(() => {
        // console.log('cart', cart);
    }, [cart])


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
            <div className="item-count--body">
                <img className="item-count--body__img" src={img} alt="" />
                {
                    cart.find((cartProduct) => cartProduct.id === id) && <span className='item-count--body__counter'>{cart.find((cartProduct) => cartProduct.id === id).quantity}</span>
                }
            </div>

            <ItemCount
                product={product}
                initial={cart.find((cartProduct) => cartProduct.id === id) ? cart.find((cartProduct) => cartProduct.id === id).quantity : 0}
                cart={cart}
                setCart={setCart} />

        </div>
    )
}

export default Item