import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

const NavBar = ({ products, cart }) => {

    const categories = Array(...new Set(products.map((product) => product.category)))
    const navigate = useNavigate();

    useEffect(() => {
        console.log('cart state', cart);
    }, [cart])


    return (
        <header className="header">
            <div className='header__top'>
                <img onClick={() => navigate('/')} className="header__top--logo" src="/img/logo2.png" />
                <h1 className="header__top--title">Lady&beauty</h1>
                <span className='header__top--icon' onClick={() => navigate('/cart')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    {
                        cart.length > 0 && <span className='header__top--icon__counter'>{cart.length}</span>
                    }

                </span>
            </div>

            <nav className="header__items">
                <NavLink to={'/products/All'} className={({ isActive }) => isActive ? 'activeUrl' : undefined}>Novedades</NavLink>
                {categories.map((category, index) => (
                    <NavLink key={index} to={`/products/${category}`} className={({ isActive }) => isActive ? 'activeUrl' : undefined}>{category}</NavLink>
                ))}

            </nav>
        </header>
    )

}

export default NavBar