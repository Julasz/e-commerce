import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useCartContext} from '../../context/CartContext'

const CartFormulario = ({generarOrden}) => {
    
    
    const {getForm, formData} = useCartContext()
    return (
        <>
        {/* <form>
            <h3>Ingresá tus datos para finalizar</h3>
            <h4>Nombre y Apellido: </h4>
            <input type="text" name="name" id="" />
            <h4>Teléfono: </h4>
            <input type="number" name="phone" id="" />
            <h4>Email: </h4>
            <input type="email" name="email" id="" />
            <h4>Confirmar email: </h4>
            <input type="email" name="email2" id="" />
            <br />
            <input type="submit" name="" id="" />
        </form> */}
            <Form onChange={getForm} onSubmit={generarOrden}>
                <Form.Label>Ingresá tus datos para finalizar</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre y Apellido: </Form.Label>
                    <Form.Control type="text" name="name" placeholder="Nombre y apellido completo" required defaultValue={formData.name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono: </Form.Label>
                    <Form.Control type="number" name="phone" placeholder="Teléfono de contacto" required defaultValue={formData.phone}/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" name="email" placeholder="nombre@example.com" required defaultValue={formData.email}/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirmar Email: </Form.Label>
                    <Form.Control type="email" name="email2" placeholder="nombre@example.com" required defaultValue={formData.email2}/>
                    
                </Form.Group>
                <Link>
                    <Button variant="primary" type="submit">
                        Comprar
                    </Button>
                </Link>
            </Form>
        </>
    )
}

export default CartFormulario
