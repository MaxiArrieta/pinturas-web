import React from "react"
import { Container, Link } from "./styles"

const Footer = () => {
  return (
    <Container>
      <Link to={"home"} smooth duration={1000}>
        Subir
      </Link>
      <p>Copyright © {new Date().getFullYear()} -Maximiliano Arrieta</p>
      <p>Todos los derechos reservados.</p>
    </Container>
  )
}

export default Footer
