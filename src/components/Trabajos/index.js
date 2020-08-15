import React from "react"
import Fade from "react-reveal/Fade"
import { H1, Div } from "./styles"
import Images from "./images"

const Trabajos = () => {
  return (
    <section>
      <Fade bottom duration={1000} delay={500} distance="30px">
        <H1>Nuestros Trabajos</H1>
      </Fade>

      <Div>
        <Fade left duration={1000} delay={500} distance="30px">
          <Images titulo="Antes" name="antes" />
        </Fade>
        <Fade right duration={1000} delay={500} distance="30px">
          <Images titulo="Despues" name="despues" />
        </Fade>
      </Div>
    </section>
  )
}

export default Trabajos
