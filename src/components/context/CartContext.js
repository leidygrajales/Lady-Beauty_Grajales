import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { createContext } from "react";
import { db } from "../../FireBase";

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

        const orderRef = collection(db, "orders")

        const order = {
            buyer: { name: "user", phone: "+54 44444444", email: "user@example.com" },
            items: cart.map(({ id, title, price, quantity }) => (
                {
                    id,
                    title,
                    price,
                    quantity
                })),
            total: GetTotalCart()
        }

        addDoc(orderRef, order)
            .then(({ id }) => {
                EmptyCart()
                return alert(`Pedido Finalizado Exitosamente, ID del pedido: ${id}`)
            })
            .catch((err) => {
                return alert('Error al finalizar pedido, intentelo nuevamente')
            })
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