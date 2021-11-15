import {memo} from "react";
import Item from "../Item/Item";
import './itemList.scss';

const ItemList = memo (

    ({product}) => {
        
        return (
            <div className="contenedor-productos">
                {product.map(prod => <Item key={prod.id} prod={prod}/>
                )}
            </div>
        )
    }
)

export default ItemList