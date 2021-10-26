
import React, {useState} from 'react'
import {Button } from "react-bootstrap"

export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)
    
   
    const SumarContador = () => contador < stock ? setContador(contador + 1) : console.log(`Tenemos de stock solo ${stock} unidades`);
    const RestarContador = () => contador > initial ? setContador(contador - 1) : console.log(`Se puede comprar desde 1 unidad`);

    const AgregarContador = () => contador === 0 ? console.log(`Se desactiva`) : console.log(`Has comprado ${contador} productos`);

    return (
        <>
            
            <div className='item-count'>
                <Button onClick={RestarContador}>-</Button>
                <h3>{contador}</h3>
                <Button onClick={SumarContador}>+</Button>
                <Button className='btn-add-contador' onClick={AgregarContador}>Agregar al carrito</Button>
            </div>
        </>
    )
}
