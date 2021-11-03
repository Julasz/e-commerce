import {useEffect, useState} from 'react'
import { RenderUnProducto } from '../Stock/Stock'
import { useParams } from 'react-router'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './itemDetailContainer.scss'

export const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    
    const {productId} = useParams()
    
    useEffect(() => {
        RenderUnProducto
        .then(res =>{
            
            setProduct(res.find(prod => prod.id === productId))
        })
        .catch( error => alert(`Error: ${error}`))
        .finally(() => setLoading(false))
        
    },[productId])
    
    return (
        <>
            
            { loading ? <h2>Cargado..</h2> : <ItemDetail product={product}/>     }
        </>
    )
}
