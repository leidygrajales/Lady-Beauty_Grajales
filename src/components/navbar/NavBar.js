import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ products }) => {

    const categories = Array(...new Set(products.map((product) => product.category)))
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className='header__top'>
                <img onClick={() => navigate('/')} className="header__top--logo" src="/img/logo2.png" />
                <h1 className="header__top--title">Lady&beauty</h1>
                <span className='header__top--icon' onClick={() => navigate('/cart')}> <FontAwesomeIcon icon={faCartShopping} /></span>

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