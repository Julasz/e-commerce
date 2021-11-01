import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {renderPantalla} from './Stock'
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()    

    useEffect(() => {

        if (id) {
            renderPantalla
            .then(res =>{
                setProduct(res.filter(prod => prod.categoria === id))
            })
            .catch( error => alert(`Error: ${error}`))
            .finally(() => setLoading(false))
        } else{

            renderPantalla
            .then(res =>{
                setProduct(res)
            })
            .catch( error => console.log(error))
            .finally(() => setLoading(false))
        }


    },[id])
    console.log(id)
    
    return(
        <>
            { loading ? <h2>Cargando..</h2> :
                <ItemList product={product}/>
            }
        </>
    )
}