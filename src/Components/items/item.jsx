import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Item = ({id, title, stock, pictureUrl}) => {

    return (
        <>
            <div key={id} className="container1">
                <section className='container1'>
                    <div className='row'>
                        <Card className='card'>
                            <Card.Img variant="top" src={pictureUrl} alt="foto de skin mask"/>
                            <Card.Body>
                                <Card.Title className='card_title'>{title}</Card.Title>
                                <Card.Text className='card_text'>Tenemos {stock} unidades disponibles</Card.Text>
                                <Link to='/detalle/${prod.idCategoria}'>
                                    <button>Ver detalles</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </div>
        </>
        
    )
}
