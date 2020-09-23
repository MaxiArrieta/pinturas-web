import React from "react"
import { Navbar, Div, Link, H1 } from "./styles"
import Navegacion from "../Nav"

const Header = () => (
  <Navbar
    style={{
      background: "#6c3483",
      padding: "1rem",
    }}
  >
    <Div>
      <Link to={"home"} smooth duration={1000}>
        <H1>
          Pintor Silletero E. Benitez <span>1122520371</span>
        </H1>
      </Link>

      <Navegacion />
    </Div>
  </Navbar>
)

export default Header
