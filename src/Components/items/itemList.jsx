import React, {useEffect, useState} from 'react'
import { Item } from './Item'

const productos = [
    {id: 1, title:"Skin Mask", price: 150, pictureUrl: 'assets/lidherma/skinMask.jpeg'},
    {id: 2, title:"Delineador", price: 470, pictureUrl: 'assets/lidherma/delineador.jpeg'},
    {id: 3, title:"Bronceador B2", price: 200, pictureUrl: 'assets/lidherma/bronceador.jpeg'},
    {id: 4, title:"Purificador", price: 340, pictureUrl: 'assets/lidherma/hydrapore.jpeg'}
]
//renderPantalla para llamar a la API (el array de productos
const renderPantalla = new Promise ((resolve, reject) => {
    //tareas asincronicas
    setTimeout(()=>{
        resolve(productos)
    }, 2000)

})

export const ItemList = () => {
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        renderPantalla
        .then(res =>{
            /* parsear las apis */
            //return data - devuelve la respuesta => para llamar a la API resp.json()
            setProduct(res)
        })
        .catch( error => console.log(error))
        .finally(() => console.log('Finalizó'))

    },[])
    
    console.log(product)
    return (
        <>
            {
                product.map( (prod) => <Item key={prod.id} title={prod.title} price={prod.price} pictureUrl={prod.pictureUrl} />)
            }
        </>
    )
}
