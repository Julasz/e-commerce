
import React, {useState} from 'react'
import {Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)
    
   
    const SumarContador = () => contador < stock ? setContador(contador + 1) : console.log(`Tenemos de stock solo ${stock} unidades`);
    const RestarContador = () => contador > initial ? setContador(contador - 1) : console.log(`Se puede comprar desde 1 unidad`);

    const AgregarContador = () => contador === 0 ? console.log(`Se desactiva`) : console.log(`Has comprado ${contador} productos`);

    return (
        <>
            
            <div className='item-count'>
                <div className='botonesContador'>
                    <Button onClick={RestarContador}>-</Button>
                    <h3>{contador}</h3>
                    <Button onClick={SumarContador}>+</Button>
                </div>

                <div className='botones'>
                    <Button className='btn-add-contador' onClick={AgregarContador}>Agregar al carrito</Button>
                    <Link to='/'><Button className='btn-add-contador'>Volver</Button></Link>
                </div>
            </div>
        </>
    )
}
