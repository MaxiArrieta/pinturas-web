import React from "react"
import Fade from "react-reveal/Fade"
// import "bootstrap/dist/css/bootstrap.min.css"
//import Carousel from "react-bootstrap/Carousel" //aca importamops el carrusel

import Slider from "react-slick"
import { H1, Div } from "./styles"
import Images from "./images"

const Trabajos = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <section id="trabajos">
      <Fade bottom duration={1000} delay={500} distance="30px">
        <H1>Nuestros Trabajos</H1>
      </Fade>

      <Div>
        <Fade left duration={1000} delay={500} distance="30px">
          <Slider {...settings}>
            <div>
              <Images titulo="Antes" name="antes" />
            </div>
            <div>
              <Images titulo="Despues" name="despues" />
            </div>
          </Slider>
        </Fade>
      </Div>
    </section>
  )
}

export default Trabajos
