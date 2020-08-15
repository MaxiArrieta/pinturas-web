import React from "react"
import { Contenido, Section, Div, DivGrid } from "./styles"
import Formulario from "../Formulario"
import Fade from "react-reveal/Fade"

const Contacto = () => {
  return (
    <Section id="contacto">
      <Contenido>
        <Fade right duration={1000} delay={500} distance="30px">
          <Formulario />
        </Fade>
        <Fade right duration={1000} delay={500} distance="30px">
          <DivGrid>
            <h2>Contactenos</h2>
            <Div>
              <span>Direccion: </span>
              <br />
              <span>Merlo centro</span>
              <br />
              <br />
              <span>Celular: </span>
              <br />
              <span>1198765432</span>
              <br />
              <br />
              <span>Email: </span>
              <br />
              <span>email@email.com</span>
              <br />
              <br />
              <span>Horarios de atencion: </span>
              <br />
              <span>Lunes a Lunes: 00 a 00hs 24/7</span>
              <br />
              <br />
              <span>Formas de pago: </span>
              <br />
              <span>Mercado Pago - Efectivo</span>
            </Div>
          </DivGrid>
        </Fade>
      </Contenido>
    </Section>
  )
}

export default Contacto
