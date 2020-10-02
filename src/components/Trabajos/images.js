import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Image, H2, DivImagen } from "./styles"

//hacer una prop para que reciba el nombre y hacer una
//fucion de las imagenes de antes y despues para que se vea
//una preview buena, o elegir una imagen de las 2
const Images = ({ name, titulo }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  const image = images.edges.find(n => n.node.relativePath.includes(name))

  if (!image) return null
  const imageFluid = image.node.childImageSharp.fluid

  return (
    <div>
      <H2>{titulo}</H2>
      <Image
        alt={name}
        imgStyle={{ position: "relative" }}
        fluid={imageFluid}
      />
    </div>
  )
}

export default Images
