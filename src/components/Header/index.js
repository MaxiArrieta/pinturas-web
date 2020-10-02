import React from "react"
import { Navbar, Div, Link, H1 } from "./styles"
import {RiWhatsappLine} from 'react-icons/ri'
import Navegacion from "../Nav"
//oscar pidio este: #00aae4
//antes estaba este color: #6c3483
const Header = () => (
  <Navbar
    style={{
      background: "#00aae4",
      padding: "1rem",
    }}
  >
    <Div>
      <Link to={"home"} smooth duration={1000}>
        <H1>
          Pintor Silletero E. Benitez{" "}
          <span>
            <RiWhatsappLine size="2em" /> 1122520371
          </span>
        </H1>
      </Link>

      <Navegacion />
    </Div>
  </Navbar>
)

export default Header
