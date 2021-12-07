import {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);
    const [itemCantidad, setItemCantidad] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [userData, setuUserData] = useState({name:"", phone:"", email:"", emailDos:""})

    const addAlCarrito = items => {
        setItemCantidad(itemCantidad + items.cantidad)
        setCartTotal(cartTotal + (items.product.price * items.cantidad))
        const encontrarItem = cartList.find(itemDelCarrito => itemDelCarrito.product.id === items.product.id)        
        if (encontrarItem) {
            encontrarItem.cantidad = encontrarItem.cantidad + items.cantidad
            setCartList(cartList)
        }
        else {setCartList(anteriorItem => [...anteriorItem, items])}
    }
    const removerItem = itemRemoverId => {
        const itemRemover = cartList.find(itemEnCarrito => itemEnCarrito.product.id === itemRemoverId)
        setCartList(cartList.filter(itemBuscado => itemBuscado.product.id !== itemRemoverId))
        setItemCantidad(itemCantidad - itemRemover.cantidad)
        setCartTotal(cartTotal - (itemRemover.product.price * itemRemover.cantidad))
    }
    const removerCart = () => {
        setItemCantidad(0)
        setCartTotal (0)
        setCartList([])
    }
    const handleForm = (e) => {
        setuUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <CartContext.Provider value={{cartList, addAlCarrito, removerItem, removerCart, itemCantidad, cartTotal, handleForm, userData}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider