
import { Item } from "../Item/Item"
import { memo } from 'react'
import './itemList.scss'


// memo ( () => {} ) call back

// se coloca antes de la llamada



export const ItemList = memo(

    ({product}) => {
    
    
    console.log({product})
    
    return (
        <div className='contenedor-productos'>
            {product.map( prod => <Item key={prod.id} prod={prod}/>)}
            
        </div>
        
    ) 
    }

, (prevProp, nextProp) => prevProp.product.length === nextProp.product.length)
    
