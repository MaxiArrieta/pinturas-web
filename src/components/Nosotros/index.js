import React from "react"
import Fade from "react-reveal/Fade"
import { TextoImagen } from "./styles"

const Nosotros = () => {
  return (
    <>
      <section id="nosotros">
        <TextoImagen>
          <Fade top duration={1000} delay={500} distance="30px">
            <h1>Sobre Nosotros</h1>
            <p>
              Más de 20 años de experiencia en el rubro con un amplio catalogo de trabajos realizados.
              Nos caracterizamos por la excelencia y eficiencia de nuestro labor para brindar a nuestros 
              clientes el mejor resultado.
            </p>
          </Fade>
        </TextoImagen>
      </section>
    </>
  )
}

export default Nosotros
