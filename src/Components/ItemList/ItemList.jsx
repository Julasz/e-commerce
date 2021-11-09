import {memo} from 'react'
import { Item } from "../Item/Item"
import './itemList.scss'


// memo ( () => {} )
// se coloca antes de la llamada



export const ItemList = ({product}) => {
    
    
    console.log({product})

    return (
        <div className='contenedor-productos'>
            {product.map( prod => <Item key={prod.id} prod={prod}/>)}
            
        </div>
        
    ) 
}
