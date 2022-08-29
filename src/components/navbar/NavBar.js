import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { db } from '../../FireBase'
import CartWidget from '../cart/CartWidget'

const NavBar = () => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        const categoriesRef = collection(db, "categories")
        const consulta = getDocs(categoriesRef)

        consulta
            .then(snapshot => {
                const allCategories = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })

                console.log('allCategories', allCategories);
                setLoading(false)
                setCategories(allCategories)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <header className="header">
            <div className='header__top'>
                <img onClick={() => navigate('/')} className="header__top--logo" src="/img/logo2.png" />
                <span className="header__top--title">Lady&Beauty</span>
                <CartWidget />
            </div>

            <nav className="header__items">
                {categories.map(({ id, description }, index) => (
                    <NavLink key={index} to={`/products/${id}`} className={({ isActive }) => isActive ? 'activeUrl' : undefined}>{description}</NavLink>
                ))}

            </nav>
        </header>
    )

}

export default NavBar