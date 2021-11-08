
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    //le tengo que pasar el CONTEXTO QUE CREE : CARTCONTEXT

    const mostrarListado = () => {
        console.log(cartList)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            mostrarListado
        }}>
                {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider