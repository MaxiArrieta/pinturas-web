import React from "react"
import { Navbar, Div, Link } from "./styles"
import Navegacion from "../Nav"

const Header = () => (
  <Navbar id="home">
    <Div>
      <Link to="/">
        <h1>Pinturas pablo</h1>
      </Link>
      <Navegacion />
    </Div>
  </Navbar>
)

export default Header
