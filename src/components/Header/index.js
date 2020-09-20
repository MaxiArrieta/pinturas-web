import React from "react"
import { Navbar, Div, Link, H1 } from "./styles"
import Navegacion from "../Nav"

const Header = () => (
  <Navbar
    style={{
      background: "#6c3483",
      // justify-content: "space-between",
      padding: "1rem",
    }}
  >
    <Div>
      <Link to={"home"} smooth duration={1000}>
        <H1>Pinturas pablo</H1>
      </Link>
      <Navegacion />
    </Div>
  </Navbar>
)

export default Header
