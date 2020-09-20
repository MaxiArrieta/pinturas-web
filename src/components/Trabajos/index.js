import React from "react"
import Fade from "react-reveal/Fade"
import Carousel from 'react-bootstrap/Carousel' //aca importamops el carrusel
import { H1, Div } from "./styles"
import Images from "./images"

const Trabajos = () => {
  return (
    <section>
      <Fade bottom duration={1000} delay={500} distance="30px">
        <H1>Nuestros Trabajos</H1>
      </Fade>

      <Div>
  <Carousel>{/*aplicamos el carrusel, lo que va a envolver, y luego aplicamos un metodo un metodo para que muestre cada foto como un item*/}
          <Carousel.Item>
            <Fade left duration={1000} delay={500} distance="30px">
              <Images titulo="Antes" name="antes" />
            </Fade>
          </Carousel.Item>
          <Carousel.Item>
            <Fade right duration={1000} delay={500} distance="30px">
              <Images titulo="Despues" name="despues" />
            </Fade>
          </Carousel.Item>
        </Carousel>
      </Div>
    </section>
  )
}

export default Trabajos
