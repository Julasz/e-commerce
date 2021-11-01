import {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail'
import { RenderUnProducto } from '../items/Stock'
import { useParams } from 'react-router'

export const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {

        RenderUnProducto
        .then(res =>{
            setProduct(res.find(prod => prod.categoria === productId))
        })
        .catch( error => alert(`Error: ${error}`))
        .finally(() => setLoading(false))
        
    },[productId])
    console.log(productId)
    
    return (
        <>
            
            {   loading ? <h2>Cargado..</h2> :
                <ItemDetail producto={product}/> 
            }
        </>
    )
}
