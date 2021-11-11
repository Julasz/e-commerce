import { createContext, useState, useContext } from 'react'

const CartContext = createContext()
export const useCartContext = () =>  useContext(CartContext)

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito

    function agregarAlCarrito (items){
        
        setCartList ([...cartList, items])
    }

    const mostrarListado = (itemAgregado) => {
        const encontrarItem = cartList.find(itemDelCarrito => itemDelCarrito.product.id === itemAgregado.id)

        if (encontrarItem) {
            
        }else { setCartList([...cartList, encontrarItem])}
    }
   

    const removerItem = idItemRemover => {
        setCartList( cartList.filter(itemBuscado => itemBuscado.product.id !== idItemRemover))
    }

    const removerCart = () => {
        setCartList([])
    }
    
    let data = [cartList.product]
    const noDuplicar = new Set(data)
    let result = [...noDuplicar]

    console.log('hola soy el resultado no duplicar', result)

    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            agregarAlCarrito,
            removerItem,
            removerCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
