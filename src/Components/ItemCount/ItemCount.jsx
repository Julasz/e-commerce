import {useState} from 'react';
import {Link} from "react-router-dom";
import './itemCount.scss';
import Flash from 'react-reveal/Flash'

const ItemCount = ({stock, initial, addCart}) =>{

    const [contador, setContador] = useState(initial);
    const [cambioBoton, setCambioBoton] = useState(false);
    
    const SumarContador = () => {setContador(contador-1)}   
    const RestarContador = () => {setContador(contador+1)}

    const AgregarCarrito = () => {
        addCart (contador);
        setContador(initial)
        setCambioBoton(true);
    }

    return (
        <div className="item-count">
            <div className="botonesContador">
                <button className="btn-contador" onClick={SumarContador} disabled={(contador <= initial) ? true : false}>-</button>
                <h3>{contador}</h3>
                <button className="btn-contador" onClick={RestarContador} disabled={(contador >= stock) ? true : false}>+</button>
            </div>
            <div className="botones">

                {cambioBoton ? <Flash><Link to="/cart"><button className="btn-add-terminar">Terminar compra</button></Link></Flash>
                : <button className="btn-add-contador" onClick={AgregarCarrito}>Agregar al carrito</button>
                }
                <Link to='/'><button className='btn-volver-contador'>Volver</button></Link>
            </div>
        </div>
    )
}

export default ItemCount