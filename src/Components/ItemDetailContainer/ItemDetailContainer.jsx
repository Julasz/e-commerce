import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../services/getFirestore';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {productId} = useParams();

    useEffect(() => {

        const dataBase = getFirestore()

        const dataBaseQuery = dataBase.collection("items").doc(productId).get()

        dataBaseQuery
        .then(item => setProduct({id:item.id, ...item.data()}))
        .catch (error => alert("Error:", error))
        .finally(()=> setLoading(false))

    },[productId])

    return (
            <div>
                {loading ? <h2 className="loading">El detalle del producto se está cargando</h2> : <ItemDetail product={product}/> }
            </div>
    )
}

export default ItemDetailContainer