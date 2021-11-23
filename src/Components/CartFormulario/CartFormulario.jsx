import {useState} from 'react'

const CartFormulario = ({generarOrden}) => {
    const [name, setName] = useState(false)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [emailDos, setEmailDos] = useState(false)

    const nameRegex =/^[a-zA-Z]{3,16}$/
    const phoneRegex =/^[0-9]{11}$/
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/

    const valorName = (nameValidar) => {
        if (nameValidar) {
            if (nameRegex.test(nameValidar)) {
                setName(true)
            }
        }
    }
    const valorPhone = (phoneValidar) => {
        if (phoneValidar) {
            if (phoneRegex.test(phoneValidar)) {
                setPhone(true)
            }
        }
    }
    const valorEmail = (emailValidar) => {
        if (emailValidar) {
            if (emailRegex.test(emailValidar)) {
                setEmail(true)
            }
        }
    }
    const valorEmailDos = (emailDosValidar) => {
        if (emailDosValidar) {
            if (emailRegex.test(emailDosValidar)) {
                setEmailDos(true)
            }
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        if(name===true && phone===true && email===true && emailDos===true){
            alert(`¡Gracias por comprar! Pronto enviaremos su pedido.`)
        }else{
            alert(`error enorme de validacion`)
        }

        setTimeout(()=> {window.location.reload()},8000)
    }
    return (
        <>
            <form onSubmit={e=>enviar(e)}>
                <h3>Ingresá tus datos para finalizar</h3>
                <h4>Nombre y Apellido: </h4>
                <input type="text" name="name" onChange={e=>valorName(e.target.value)}/>
                <h4>Teléfono: </h4>
                <input type="tel" name="phone" pattern="[0-9]{10}" onChange={e=>valorPhone(e.target.value)}/>
                <h4>Email: </h4>
                <input type="email" name="email" onChange={e=>valorEmail(e.target.value)}/>
                <h4>Confirmar email: </h4>
                <input type="email" name="email2" onChange={e=>valorEmailDos(e.target.value)}/>
                <br />
                <input type="submit" name="" />
            </form>
            
        </>
    )
}

export default CartFormulario
