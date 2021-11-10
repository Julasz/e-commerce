import { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])
    
    function agregarAlCarrito (items) {
        setCartList([
            ...cartList,
            items
        ])
    }
    const mostrarListado = (itemAgregado) => {
        const encontrarItem = cartList.find(itemEnCarrito => itemEnCarrito.product.id === itemAgregado.product.id)
        if (encontrarItem) {
            encontrarItem.contador = encontrarItem.contador + itemAgregado.contador
            setCartList(cartList)
        }
        console.log(cartList)
    }

    const removerItem = idItemRemover => {
        setCartList( cartList.filter(itemBuscado => itemBuscado.product.id !== idItemRemover))
    }

    const removerCart = () => {
        setCartList([])
    }


    return(
        <CartContext.Provider value={{
            cartList, 
            mostrarListado, removerItem, removerCart, agregarAlCarrito}}>
                {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider