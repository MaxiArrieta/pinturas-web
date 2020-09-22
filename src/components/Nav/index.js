import React from "react"
import { Nav, Link, Span } from "./styles"

const Navegacion = () => {
  return (
    <Nav>
      {/* <Link to={"home"}>Inicio</Link> */}
      <Link to={"nosotros"} smooth duration={1000}>
        <Span>Nosotros</Span>
      </Link>
      <Link to={"trabajos"} smooth duration={1000}>
        <Span>Trabajos</Span>
      </Link>
      <Link to={"contacto"} smooth duration={1000}>
        <Span>Contacto</Span>
      </Link>
    </Nav>
  )
}

export default Navegacion
