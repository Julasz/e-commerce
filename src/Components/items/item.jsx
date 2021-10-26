import React from "react"
import { Card } from "react-bootstrap"
import { ItemCount } from "./ItemCount"

export const Item = ({id, title, price, pictureUrl}) => {

    return (
        <>
            <div key={id} className="container1">
                <section className='container1'>
                    <div className='row'>
                        <Card className='card'>
                            <Card.Img variant="top" src={pictureUrl} alt="foto de skin mask"/>
                            <Card.Body>
                                <Card.Title className='card_title'>{title}</Card.Title>
                                <Card.Text className='card_text'>{price}</Card.Text>
                                <ItemCount stock={10} initial={0}/>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </div>
        </>
        
    )
}
