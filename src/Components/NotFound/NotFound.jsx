import {Link} from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
    return (
        <div>
            <p className="not-found-page">¡Ups! No encontramos lo que estás buscando</p>
            <Link className="volver-al-inicio" to="/"> Ir al inicio</Link>
        </div>
    )
}

export default NotFound
