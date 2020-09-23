import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ImageBackground, TextoImagen } from "./styles"
import Fade from "react-reveal/Fade"

const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "3.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const img = image.sharp.fluid
  return (
    <section id="home">
      <ImageBackground tag="section" fluid={img} fadeIn="soft">
        <TextoImagen>
          <Fade left duration={1000} delay={500} distance="30px">
            <h2>Pintor Silletero E. Benitez</h2>
            <p>
              Pintamos tu hogar, local , lo que sea!! todo a tu gusto!
            </p>
          </Fade>
        </TextoImagen>
      </ImageBackground>
    </section>
  )
}

export default Image
