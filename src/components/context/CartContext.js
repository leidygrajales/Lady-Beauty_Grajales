import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const AddItem = (product, quantity) => {
        let productToAdd = cart.find((cartProduct) => cartProduct.id === product.id)

        if (!productToAdd) {
            productToAdd = { ...product, quantity }
            return setCart([...cart, productToAdd])
        } else {
            productToAdd.quantity = quantity
            return setCart([...cart])
        }
    }

    const DeleteItem = (id) => {
        return setCart(cart.filter((obj) => obj.id !== id))
    }

    const EmptyCart = () => {
        return setCart([])
    }

    const FinishOrder = () => {
        EmptyCart()
        return alert('Pedido Finalizado Exitosamente')
    }

    const GetCartQuantity = () => {
        return cart.reduce((total, item) => total += item.quantity, 0)
    }

    const GetTotalItem = ({ quantity, price }) => {
        return price * quantity
    }

    const GetTotalCart = () => {
        return cart.reduce((total, { quantity, price }) => total += quantity * price, 0)
    }

    const AddProductQuantity = ({ id, stock, quantity }) => {
        const cartProduct = cart.find((product) => product.id === id)
        const newQuantity = quantity + 1

        if (newQuantity <= stock) {
            cartProduct.quantity = newQuantity
            return setCart([...cart])
        }
    }

    const SubstractProductQuantity = ({ id, quantity }) => {
        const cartProduct = cart.find((product) => product.id === id)
        const newQuantity = quantity - 1

        if (newQuantity >= 0) {
            cartProduct.quantity = newQuantity
            return setCart([...cart])
        }
    }

    return (
        <Provider value={{ cart, EmptyCart, AddItem, DeleteItem, GetCartQuantity, GetTotalItem, AddProductQuantity, SubstractProductQuantity, GetTotalCart, FinishOrder }}>
            {children}
        </Provider>
    )
}

export default MyProvider;