
import {useState} from 'react'
import {Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import './itemCount.scss'

export const ItemCount = ({stock, initial, addCart}) => {

    const [contador, setContador] = useState(initial)
    const [cambio, setCambio] = useState(false)
    // const [loading, setLoading] = useState(true)
   
    const SumarContador = () => {setContador(contador + 1)}
    const RestarContador = () => {setContador(contador - 1)}

    const AgregarCarrito = () => {
        addCart (contador); 
        setCambio(true)
    }

    return (
        <>
            
            <div className='item-count'>
                <div className='botonesContador'>
                    <Button onClick={RestarContador} disabled={(contador <= initial) ? true : false}>-</Button>
                    <h3>{contador}</h3>
                    <Button onClick={SumarContador} disabled={(contador >= stock) ? true : false}>+</Button>
                </div>

                <div className='botones'>
                {
                    cambio ? <Link to='/cart'><Button className='btn-add-contador'>Terminar compra</Button></Link>
                    :
                    <Button className='btn-add-contador' onClick={AgregarCarrito}>Agregar al carrito</Button>
                }
                    <Link to='/'><Button className='btn-add-contador'>Volver</Button></Link>
                </div>
            </div>
        </>
    )
}
