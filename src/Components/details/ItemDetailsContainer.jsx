import React from 'react'
import { Link } from 'react-router-dom'
import {renderPantalla} from '../items/Stock'
import { ItemCount } from '../items/ItemCount'
import { ItemDetail } from './ItemDetail'
import { Card } from 'react-bootstrap'


// const getItem = new Promise ((resolve, reject) => {
//     setTimeout(() =>{
//         resolve(ItemDetail)
//     }, 2000)
// })

export const ItemDetailsContainer = ({productos}) => {

    return (
        <>
            {/* <div key={productos.id} className='container1'>
                <section className='container1'>
                    <div className='row'>
                        <Card className='card'>
                            <Card.Img variant='top' src={productos.pictureUrl} alt='foto'/>
                            <Card.Body>
                                <Card.Title className='card_title'>{productos.title}</Card.Title>
                                <Card.Text className='card_text'>{ItemDetail}</Card.Text>
                                <Card.Text className='card_text'>{productos.price}</Card.Text>
                                <ItemCount stock={productos.stock} initial={0}/>
                            </Card.Body>
                            <Card.Footer>
                            <Link to='/carrito'>
                                <button>Agregar al carrito</button>
                            </Link>
                            <Link to='/'>
                                <button>Volver</button>
                            </Link>
                            </Card.Footer>
                        </Card>
                    </div>
                </section>
            </div> */}
        </>
    )
}
