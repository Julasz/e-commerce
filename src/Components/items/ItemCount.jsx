
import React, {useState} from 'react'
import { Card, Button } from "react-bootstrap"

export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)
    
   
    const SumarContador = () => contador < stock ? setContador(contador + 1) : console.log(`Tenemos de stock solo ${stock} unidades`);
    const RestarContador = () => contador > initial ? setContador(contador - 1) : console.log(`Se puede comprar desde 1 unidad`);

    const AgregarContador = () => contador === 0 ? console.log(`Se desactiva`) : console.log(`Has comprado ${contador} productos`);

    return (
        <>
            <section className='container1'>
                <div className='row'>
                    
                        <Card className='card'>
                            <Card.Img variant="top" src="assets/lidherma/skinMask.jpeg" alt="foto de skin mask"/>
                            <Card.Body>
                                <Card.Title className='card_title'>Skin Mask</Card.Title>
                                <Card.Text className='card_text'>Texto descriptivo</Card.Text>
                                <Button>Ver detalles</Button>
                                <div className='item-count'>
                                    <Button onClick={RestarContador}>-</Button>
                                    <h3>{contador}</h3>
                                    <Button onClick={SumarContador}>+</Button>
                                </div>
                                <Button className='btn-add-contador' onClick={AgregarContador}>Agregar al carrito</Button>
                               

                            </Card.Body>
                        </Card>
                    
                   

                </div>

            </section>
        </>
    )
}
