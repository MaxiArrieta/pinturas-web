import styled from "styled-components"
// Le cambio el nombre a LinkGatsby
import { Link as LinkScroll } from "react-scroll"
import Headroom from "react-headroom"

export const Navbar = styled(Headroom)`
  background: #6c3483;
  /* margin-bottom: 1.45rem; */
  justify-content: space-between;
  padding: 1rem;
`

export const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Link = styled(LinkScroll)`
  color: white;
  text-decoration: none;
`
