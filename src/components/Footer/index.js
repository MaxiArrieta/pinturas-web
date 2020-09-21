import React from "react"
import { Container, Link, Span } from "./styles"

const Footer = () => {
  return (
    <Container>
      <Link to={"home"} smooth duration={1000}>
        <Span>Subir</Span>
      </Link>
      <p>Copyright © {new Date().getFullYear()} - By Maximiliano Arrieta</p>
      <p>Todos los derechos reservados.</p>
    </Container>
  )
}

export default Footer
