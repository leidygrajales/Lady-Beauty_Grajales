import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cart from '../components/cart/Cart'
import ItemListContainer from "../components/item/ItemListContainer"
import NavBar from '../components/navbar/NavBar'
import MyProvider from '../components/context/CartContext'

const NavigationRouter = () => {

    return (
        <BrowserRouter>
            <MyProvider>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Navigate to="/products/All" replace />} />
                    <Route exact path='/products/:categoryId/' element={<ItemListContainer />} />
                    <Route exact path='/products/:categoryId/:productId' element={<ItemListContainer />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="*" element={<>404 not found</>} />
                </Routes>
                {/* <footer style={{ display: 'flex' }}>
                    <p>footer</p>
                </footer> */}
            </MyProvider>
        </BrowserRouter>
    )
}
export default NavigationRouter