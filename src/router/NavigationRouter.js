import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cart from '../components/Cart'
import ItemListContainer from "../components/item/ItemListContainer"
import NavBar from '../components/navbar/NavBar'

const NavigationRouter = ({ products }) => {

    const [cart, setCart] = useState([])

    return (
        <BrowserRouter>
            <NavBar products={products} cart={cart} />
            <Routes>
                <Route exact path="/" element={<Navigate to="/products/All" replace />} />
                <Route exact path='/products/:categoryId/' element={<ItemListContainer products={products} cart={cart} setCart={setCart} />} />
                <Route exact path='/products/:categoryId/:productId' element={<ItemListContainer products={products} cart={cart} setCart={setCart} />} />
                <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                <Route exact path="*" element={<>404 not found</>} />
            </Routes>
            <footer style={{ display: 'flex' }}>
                <p>footer</p>
            </footer>
        </BrowserRouter>
    )
}
export default NavigationRouter