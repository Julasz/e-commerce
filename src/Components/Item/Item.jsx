import {Link} from "react-router-dom";
import {Card} from 'react-bootstrap'
import './item.scss'; 

const Item = ({prod}) => {
    
    return (
            <div className="container1" >
                <section className="container1">
                    <div className="row">
                        <Card className='card'>
                            <Link to={`/productos/${prod.id}`}><img className="item-img" src={prod.pictureUrl} alt={prod.title}/></Link>
                            <h3>{prod.title} - {prod.categoria}</h3>
                            <Link to={`/productos/${prod.id}`}><button className='item-count'>Más información</button></Link>
                            <p className='card_text'>Tenemos {prod.stock} unidades disponibles</p>
                        </Card>
                    </div>
                </section>
            </div>
    )
}

export default Item