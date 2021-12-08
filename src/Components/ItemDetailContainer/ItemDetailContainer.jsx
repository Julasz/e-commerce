import {isValidElement, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../services/getFirestore';
import NotFound from '../NotFound/NotFound';
import ItemDetail from '../ItemDetail/ItemDetail';
import Reveal from 'react-reveal/Reveal'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFoundPage, setNotFoundPage] = useState(false)
    const {productId} = useParams();

    useEffect(() => {
        const dataBase = getFirestore()
        dataBase.collection("items").doc(productId).get()
        .then((item) => {
            !item.exists ? setNotFoundPage(true) : setProduct({id:item.id, ...item.data()})
        })
        .catch (error => alert("Error:", error))
        .finally(()=> setLoading(false))

    },[productId])

    return (
            <div>
                { notFoundPage ? <NotFound/> : loading ? <h2 className="loading">El detalle del producto se está cargando</h2> : <Reveal effect='fadeInUp'><ItemDetail product={product}/></Reveal> }
            </div>
    )
}

export default ItemDetailContainer