import React from "react"
import { Nav, Link } from "./styles"

const Navegacion = () => {
  return (
    <Nav>
      {/* <Link to={"home"}>Inicio</Link> */}
      <Link to={"nosotros"} smooth duration={1000}>
        Nosotros
      </Link>
      <Link to={"contacto"} smooth duration={1000}>
        Contacto
      </Link>
    </Nav>
  )
}

export default Navegacion
