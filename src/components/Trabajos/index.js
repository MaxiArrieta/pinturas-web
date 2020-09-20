import React from "react"
import Fade from "react-reveal/Fade"
// import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel" //aca importamops el carrusel
import { H1, Div } from "./styles"
import Images from "./images"

const Trabajos = () => {
  return (
    <section id="trabajos">
      <Fade bottom duration={1000} delay={500} distance="30px">
        <H1>Nuestros Trabajos</H1>
      </Fade>

      <Div>
        <Fade left duration={1000} delay={500} distance="30px">
          <Carousel>
            {/*aplicamos el carrusel, lo que va a envolver, y luego
           aplicamos un metodo un metodo para que muestre cada foto como un item*/}
            <Carousel.Item>
              <Images titulo="Antes" name="antes" />
            </Carousel.Item>
            <Carousel.Item>
              <Images titulo="Despues" name="despues" />
            </Carousel.Item>
          </Carousel>
        </Fade>
      </Div>
    </section>
  )
}

export default Trabajos
