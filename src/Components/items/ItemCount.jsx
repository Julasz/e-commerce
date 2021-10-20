
import React, {useState} from 'react'
import { Card, Button } from "react-bootstrap"

export const ItemCount = () => {

    const [carrito, setCarrito] = useState(0)
  
    const SumarCarrito = () => {
      if(carrito < 10){
        setCarrito(carrito + 1)
      }
    };

    const RestarCarrito = () => {
        if (carrito > 1) {
            setCarrito(carrito - 1)
        }
        
    }

    const AgregarCarrito = () => {
        console.log(`Has comprado ${carrito} productos`);
    }
    return (
        <>
            <section className='container1'>
                <div className='row'>
                    
                        <Card className='card'>
                            <Card.Img variant="top" src="holder.js/100px180" alt="foto de skin mask"/>
                            <Card.Body>
                                <Card.Title className='card_title'>Skin Mask</Card.Title>
                                <Card.Text className='card_text'>Texto descriptivo</Card.Text>

                                <div className='item-count'>
                                    <Button onClick={RestarCarrito}>-</Button>
                                    <h3>{carrito}</h3>
                                    <Button onClick={SumarCarrito}>+</Button>
                                </div>
                                <Button className='btn-add-carrito' onClick={AgregarCarrito}>Agregar al carrito</Button>
                               

                            </Card.Body>
                        </Card>
                    
                   

                </div>

            </section>
        </>
    )
}
