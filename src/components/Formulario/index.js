import React, { useState } from "react"
import { Form, Input, H2, TextArea, Boton } from "./styles"
import Toast from 'react-bootstrap/Toast'//toast para poner de feedback
import ToastHeader from 'react-bootstrap/ToastHeader'//toast para poner de feedback
import ToastBody from 'react-bootstrap/ToastBody'//toast para poner de feedback
import {sendMailApi} from '../../api/sendmail';//api para enviar el mail

const Fomulario = () => {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")

  const onSubmit = e => {
    e.preventDefault();
    const emailValidation=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //esto es para validar el email...
    const resultValidation= emailValidation.test(email);

    if(!email || !nombre || !telefono || !mensaje){
      //fijate de ponerle algun feedback al cliente, un mensaje... le agregaria algo pero no maneje tanto styled component
     console.log('Completa los campos');
    }else if(!resultValidation){
      
    }else{
      sendMailApi(nombre,telefono,email,mensaje)
      .then(response=>{
        
        if(response.code !== 200){
          console.log(response.message);
        }else{
          console.log(response.message);//aca hay que ponerle algun mensaje para que lo visualice el cliente
          // reiniciar formulario
          setNombre("");
          setTelefono("");
          setEmail("");
          setMensaje("");
        }
        
      }).catch(error=>{
          console.log(error.message);
      });
    }
    // Ya tinen validacion los formularios asique no hace mucha falta
    // Faltaria hacer la coneccion al backend y que se envien los datos 
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
            {/* </div>
          <div
            class="g-recaptcha"
            data-sitekey={"6Ldeh74ZAAAAAErI_nwbzt_shHhyE1B4B_A407EF"}
          ></div>
          <div> */}
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