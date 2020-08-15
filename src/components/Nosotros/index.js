import React from "react"
import Fade from "react-reveal/Fade"
import { TextoImagen } from "./styles"

const Nosotros = () => {
  return (
    <>
      <section id="nosotros">
        <TextoImagen>
          <Fade top duration={1000} delay={500} distance="30px">
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              maiores laborum dicta cupiditate tenetur? Mollitia recusandae
              optio ut, hic quod dolorem animi esse illum. Quae saepe explicabo
              debitis voluptates accusantium. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Facilis eius qui sunt doloremque,
              expedita molestiae eveniet dolorem perspiciatis autem id earum
              natus, voluptatibus sequi debitis repellendus accusamus deserunt
              sed laudantium. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Perspiciatis id rerum voluptatum voluptatem iste
              qui eum modi odit hic quae. Quod, atque molestias? Facilis et
              illum, obcaecati excepturi fuga mollitia.
            </p>
          </Fade>
        </TextoImagen>
      </section>
    </>
  )
}

export default Nosotros
