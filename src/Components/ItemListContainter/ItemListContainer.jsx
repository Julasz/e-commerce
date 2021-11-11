import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {renderPantalla} from '../Stock/Stock'
import { ItemList } from "../ItemList/ItemList"
import './itemListContainer.scss'
import { getFirestore } from '../Stock/getFirestore'

export const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()    

    useEffect(() => {


        //const dbConexion = getFirestore()
        //const dbQuery = dbConexion.collection('items').get() //la coleccion a la que quiero hacer refrencia
        
        //const dbQuery = dbConexion.collection('items').where('price', '>', 1000).get() // con esto se trae productos mayores a 400
        // 
        //dbQuery
        //.then(resp => setProduct ( resp.docs.map( prod => ({id: prod.id, ...prod.data() }))))
        //.then(resp => console.log(resp)) // para traer todos 
        //const dbQuery = dbConexion.collection('items').doc(
        //     '0J7fRM3riaHOFYoCmJdd').get()
        // dbQuery
        // .then(resp => setProduct({ id: resp.id, ...resp.data() })) //para traer uno solo. En itemDetailContainer
        //                                     //id del USEPARAMS            // data permite extraer el objeto que necesito
        //.catch
        //.finally




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
   
    
    return(
        <div className='itemListContainer'>
            { loading ? <h2>Cargando..</h2> :
                <ItemList product={product}/>
            }
        </div>
    )
}