import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../services/getFirestore';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.scss';

const ItemListContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {

        const dataBase = getFirestore() 
        
        if (id) {

            const dataBaseQuery = dataBase.collection("items").where("categoria", "==", id).get() //la coleccion a la que quiero hacer refrencia

            dataBaseQuery
            .then(resp => setProduct(resp.docs.map(item => ({id:item.id, ...item.data()}))))
            .catch (error => alert("Error:", error))
            .finally(()=> setLoading(false))
        }

        else {

            const dataBaseQuery = dataBase.collection("items").orderBy("categoria").get() //ordenados por categoria

            dataBaseQuery
            .then(resp => setProduct(resp.docs.map(item => ({id:item.id, ...item.data() }) )))
            .catch (error => alert("Error:", error))
            .finally(()=> setLoading(false))
        } 

    },[id])

    return (
            <div className="itemListContainer">
                {loading
                ? <h2 className="loading">Los productos se están cargando..</h2>
                : <ItemList product={product}/>
                }
            </div>
    )
}

export default ItemListContainer