import React from "react"
import { Contenido, Section, Div, DivGrid } from "./styles"
import Formulario from "../Formulario"
import Fade from "react-reveal/Fade"
import SocialLinks from "../SocialLinks/index"

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
              <span>1122520371 - Llamadas</span>
              <br />
              <span>1138944944 - WhatsApp</span>
              <br />
              <br />
              <span>Email: </span>
              <br />
              <a href="mailto:eladioteofiloBenitez@gmail.com">
                eladioteofiloBenitez@gmail.com
              </a>
              <br />
              <br />
              <span>Horarios de atencion: </span>
              <br />
              <span>Lunes a Lunes 24/7</span>
              <br />
              <br />
              <span>Formas de pago: </span>
              <br />
              <ul>
                <li>Mercado Pago</li>
                <li>Efectivo</li>
                <li>Transferencia Bancaria</li>
              </ul>
              <br />
              <br />
              <span>Redes Sociales</span>
              <br />
              <SocialLinks />
            </Div>
          </DivGrid>
        </Fade>
      </Contenido>
    </Section>
  )
}

export default Contacto
