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
    <>
      <ImageBackground tag="section" fluid={img} fadeIn="soft">
        <TextoImagen>
          <Fade left duration={1000} delay={500} distance="30px">
            <h2>Pinturas pablo</h2>
            <p>
              pintamos de todo -- pablo inventate un parrafo o que te pase un
              mini texto el chabon jaja --
            </p>
          </Fade>
        </TextoImagen>
      </ImageBackground>
    </>
  )
}

export default Image
