import { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    

    const mostrarListado = itemAgregado => {
        const encontrarItem = cartList.find(itemEnCarrito => itemEnCarrito.product.id === itemAgregado.product.id)
        if (encontrarItem) {
            encontrarItem.contador = encontrarItem.contador + itemAgregado.contador
            setCartList(cartList)
        }
    }

    const removerItem = idItemRemover => {
        setCartList( cartList.filter(itemBuscado => itemBuscado.product.id !== idItemRemover))
    }

    const removerCart = () => {
        setCartList([])
    }


    return(
        <CartContext.Provider value={{cartList, mostrarListado, removerItem, removerCart}}>
                {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider