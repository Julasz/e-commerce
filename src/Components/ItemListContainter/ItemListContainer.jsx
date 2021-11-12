import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from "../ItemList/ItemList"
import Spinner from 'react-bootstrap/Spinner'
import './itemListContainer.scss'
import { getFirestore } from '../Stock/getFirestore'

export const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()    

    useEffect(() => {

        const dataBase = getFirestore()
        
        if (id) {
            const dataBaseQuery = dataBase.collection('items').where('categoria', '==', id).get() //la coleccion a la que quiero hacer refrencia
            
            dataBaseQuery
            .then( resp => setProduct( resp.docs.map( item => ({ id:item.id, ...item.data() }) )))
            .catch( error => alert(`Error: ${error}`))
            .finally(() => setLoading(false))

            // renderPantalla
            // .then(res =>{
            //     setProduct(res.filter(prod => prod.categoria === id))
            // })
            // .catch( error => alert(`Error: ${error}`))
        } else{
            const dataBaseQuery = dataBase.collection('items').orderBy('categoria').get()

            dataBaseQuery
            .then( resp => setProduct(resp.docs.map( item => ({ id:item.id, ...item.data() }) )))
            .catch( error => console.log(error))
            .finally(() => setLoading(false))

            // renderPantalla
            // .then(res =>{
            //     setProduct(res)
            // })
        }


    },[id])
   
    
    return(
        <div className='itemListContainer'>
            { loading 
                ? 
                    <h2>
                        <Spinner animation="grow" size="sm" />
                        <Spinner animation="grow" />
                        Cargando..
                    </h2>
                :
                <ItemList product={product}/>
            }
        </div>
    )
}