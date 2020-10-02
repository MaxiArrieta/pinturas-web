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
              Tenemos más de 20 años de experiencia en el rubro, un amplio
              catalogo de trabajos hechos, y recomendaciones de clientes
              (mandale algo mas)
            </p>
          </Fade>
        </TextoImagen>
      </section>
    </>
  )
}

export default Nosotros
