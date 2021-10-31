import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Item } from './Item'
import {renderPantalla} from './Stock'


export const ItemList = () => {
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()    

    useEffect(() => {

        if (idCategoria) {
            renderPantalla
            .then(res =>{
                setProduct(res.filter(prod => prod.categoria === idCategoria))
            })
            .catch( error => console.log(error))
            .finally(() => setLoading(false))
        } else{

            renderPantalla
            .then(res =>{
                setProduct(res)
            })
            .catch( error => console.log(error))
            .finally(() => setLoading(false))
        }


    },[idCategoria])
    console.log(idCategoria)
    console.log(product)
    return (
        <>
            {   loading ? <h2>Cargando..</h2> :
                
                product.map( (prod) => <Item key={prod.id} title={prod.title} price={prod.price} pictureUrl={prod.pictureUrl} />)
            }
        </>
    )
}
