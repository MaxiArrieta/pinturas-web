import React from "react"
import Fade from "react-reveal/Fade"
// import "bootstrap/dist/css/bootstrap.min.css"
//import Carousel from "react-bootstrap/Carousel" //aca importamops el carrusel

import Slider from "react-slick"
import { H1, Div } from "./styles"
import Images from "./images"

const Trabajos = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
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
              <Images titulo="Silletero" name="4" />
            </div>
            <div>
              <Images titulo="Silletero" name="3b" />
            </div>
            <div>
              <Images titulo="Silletero" name="5" />
            </div>
            <div>
              <Images titulo="Silletero" name="6" />
            </div>
            <div>
              <Images titulo="Pintura" name="13" />
            </div>
            <div>
              <Images titulo="Pintura" name="12" />
            </div>
            <div>
              <Images titulo="Pintura" name="11" />
            </div>
            <div>
              <Images titulo=" " name="9" />
            </div>
            <div>
              <Images titulo="Antes" name="antes" />
            </div>
            <div>
              <Images titulo="Después" name="despues" />
            </div>
            <div>
              <Images titulo="Antes" name="3_1" />
            </div>
            <div>
              <Images titulo="Después" name="3_2" />
            </div>
            <div>
              <Images titulo="Antes" name="4_1" />
            </div>
            <div>
              <Images titulo="Después" name="4_2" />
            </div>
            <div>
              <Images titulo="Antes" name="5_1" />
            </div>
            <div>
              <Images titulo="Después" name="5_2" />
            </div>
            <div>
              <Images titulo="Antes" name="6_1" />
            </div>
            <div>
              <Images titulo="Después" name="6_2" />
            </div>
            <div>
              <Images titulo="Antes" name="7_1" />
            </div>
            <div>
              <Images titulo="Después" name="7_2" />
            </div>
            <div>
              <Images titulo="Antes" name="8_1" />
            </div>
            <div>
              <Images titulo="Después" name="8_2" />
            </div>
            <div>
              <Images titulo=" " name="14" />
            </div>
            <div>
              <Images titulo=" " name="15" />
            </div>
            <div>
              <Images titulo=" " name="16" />
            </div>
            <div>
              <Images titulo=" " name="17" />
            </div>
            <div>
              <Images titulo=" " name="18" />
            </div>
          </Slider>
        </Fade>
      </Div>
    </section>
  )
}
//flecha 2
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  )
}
//flecha 1
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}


export default Trabajos
