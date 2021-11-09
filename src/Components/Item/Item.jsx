
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../ItemList/itemList.scss'

export const Item = ({prod}) => {

    return (
            <div className="container1">
                <section className='container1'>
                    <div className='row'>
                        <Card className='card'>
                            <Link to={`/productos/${prod.id}`}><Card.Img variant="top" src={prod.pictureUrl} alt="foto"/></Link>
                            <Card.Body>
                                <Card.Title className='card_title'>{prod.title} - {prod.categoria}</Card.Title>
                                <Link className='item-count' to={`/productos/${prod.id}`}><button>Ver detalles</button></Link>
                                <Card.Text className='card_text'>Tenemos {prod.stock} unidades disponibles</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </div>

    )

}

