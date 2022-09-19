import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cart from '../components/cart/Cart'
import ItemListContainer from "../components/item/ItemListContainer"
import NavBar from '../components/navbar/NavBar'
import MyProvider from '../components/context/CartContext'
import Order from '../components/order/Order'
import Footer from "../components/footer/Footer"


const NavigationRouter = () => {

    return (
        <BrowserRouter>
            <MyProvider>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={<Navigate to="/products/all" replace />} />
                        <Route exact path='/products/:categoryId/' element={<ItemListContainer />} />
                        <Route exact path='/products/:categoryId/:productId' element={<ItemListContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path='/order/:orderId/' element={<Order />} />
                        <Route exact path="*" element={<>404 not found</>} />
                    </Routes>
                </div>
                <Footer />
            </MyProvider>
        </BrowserRouter>
    )
}
export default NavigationRouter