
import { Item } from './Item'


export const ItemList = ({product}) => {
    
   

    return (
        <div className='contenedor-productos'>

            {product.map( (prod) => <Item key={prod.id} prod={prod}/>)}
            
        </div>
        
    )
}
