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
              <span>Trabajos:</span>
              <br />
              <span>Zona Oeste, Bs.As.</span>
              <br />
              <br />
              <span>Celular: </span>
              <br />
              <span>1122520371 (llamadas)</span>
              <span>1138944944 (Whats App)</span>
              <br />
              <br />
              <span>Email: </span>
              <br />
              <span>eladioteofiloBenitez@gmail.com</span>
              <br />
              <br />
              <span>Horarios de atencion: </span>
              <br />
              <span>Lunes a Lunes 24/7</span>
              <br />
              <br />
              <span>Formas de pago: </span>
              <br />
              <span>Mercado Pago - Efectivo - Transferencia Bancaria</span>
              <br/>
              <br/>
              <span>Redes Sociales</span>
            </Div>
          </DivGrid>
        </Fade>
      </Contenido>
    </Section>
  )
}

export default Contacto
