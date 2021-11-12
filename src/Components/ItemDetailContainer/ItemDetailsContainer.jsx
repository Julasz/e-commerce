import {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../Stock/getFirestore'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './itemDetailContainer.scss'

export const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    
    const {productId} = useParams()
    
    useEffect(() => {

        const dataBase = getFirestore()

       
        const dataBaseQuery = dataBase.collection('items').doc(productId).get()

        dataBaseQuery
        .then(item => setProduct({ id:item.id, ...item.data() }) )
        .catch( error => alert(`Error: ${error}`))
        .finally(() => setLoading(false))

        
    },[productId])
    
    return (
        <>
            
            { loading ? <h2>Cargando productos..</h2> : <ItemDetail product={product}/>     }
        </>
    )
}
