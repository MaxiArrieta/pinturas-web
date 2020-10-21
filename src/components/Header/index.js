import React from "react"
import { Navbar, Div, Link, H1 , H2} from "./styles"
import { RiWhatsappLine } from "react-icons/ri"
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
        <H1>Pintor Silletero E. Benitez</H1>
      </Link>
      <H2>
        <span>
          <RiWhatsappLine size="2rem" /> 1138944944
        </span>
      </H2>

      <Navegacion />
    </Div>
  </Navbar>
)

export default Header
