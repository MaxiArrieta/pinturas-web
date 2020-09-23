import React, { useState } from "react"
import { Form, Input, H2, TextArea, Boton } from "./styles"
import ReCAPTCHA from "react-google-recaptcha"
import Toast from 'react-bootstrap/Toast'//toast para poner de feedback
import ToastHeader from 'react-bootstrap/ToastHeader'//toast para poner de feedback
import ToastBody from 'react-bootstrap/ToastBody'//toast para poner de feedback
import {sendMailApi} from '../../api/sendmail';//api para enviar el mail
let captcha;


const Fomulario = () => {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [humanKey, setHumanKey] = useState("");

  // if (!email || !nombre || !telefono || !mensaje)
  const onSubmit =  e => {
    e.preventDefault()
    const emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ //esto es para validar el email...
    const resultValidation = emailValidation.test(email);

    
    // El .trim() lo que hace es quitar todos los espacios y si es vacio
    // muestra el mensaje
    if (
      email.trim() === "" ||
      nombre.trim() === "" ||
      telefono.length < 8 ||
      mensaje.trim() === ""
    ) {
      //fijate de ponerle algun feedback al cliente, un mensaje...
      //le agregaria algo pero no maneje tanto styled component

      // Lo que hace styled component es darle estilos a las estiquetas
      // podes agregar las cosas despues yo lo doy los estilos
      alert("Todos los campos deben estar llenos")
    } else if (!resultValidation) {
      alert("El email es invalido")
    } else {
       sendMailApi(nombre, telefono, email, mensaje , humanKey)
        .then(response => {
          if (response.code !== 200) {
            alert("Hubo un error intente mas tarde")
            console.log(response.message)
          } else {
            alert("Se envio el mensaje correctamente")
            console.log(response.message)
            //aca hay que ponerle algun mensaje para que lo visualice el cliente
            // reiniciar formulario
            captcha.reset();//INTENTE RESETEAR EL VALOR DE HUMANKEY, PARA VER SI CAMBIA EL VALOR PERO NO, SEGURAMENTE PORQUE FALTA DISOLVERLO O ALGO ASI
            setNombre("")
            setTelefono("")
            setEmail("")
            setMensaje("")
          }
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }
  return (
    <>
      <div>
        <H2>Deje su Consulta</H2>
        <Form onSubmit={onSubmit}>
          <div>
            <label htmlFor="nombre">Nombre y Apellido</label>
            <Input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingrese Nombre y Apellido"
              required
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="telefono">Telefono</label>
            <Input
              type="number"
              name="telefono"
              id="telefono"
              placeholder="Ingrese su numero de Telefono"
              required
              value={telefono}
              onChange={e => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje</label>
            <TextArea
              name="mensaje"
              id="mensaje"
              placeholder="Escriba su mensaje"
              wrap="hard"
              required
              value={mensaje}
              onChange={e => setMensaje(e.target.value)}
            />
           </div>
                <ReCAPTCHA 
                  sitekey="6Le3O88ZAAAAAAguYfEw8h7Hwk_edmN1XbMSQ4U2" 
                  onChange={e=> setHumanKey(e)} 
                  ref={el => { captcha = el; }}
                  />
                  {/*Lo que falta es resetear el Captcha, una vez que se envia el mail */}
                {/* Lo que quiero hacer es que este ReCAPTCHA Le mande los datos de respuesta al backend*/}
            <div> 
            <Boton type="submit" value="Enviar" />
          </div>
        </Form>
      </div>
    </>
  )
}

export default Fomulario


/* FALTA:
ACOMODAR , CENTRALIZAR EL CARRUSEL,
PONER ESE FEEDBACK PARA QUE LE INFORME AL USUARIO QUE SE ENVIO EL MAIL,
Y FIJAR EL MENUTOP
Y COLOCAR EL CAPTCHA
 */