import styled from "styled-components"
// Le cambio el nombre a LinkGatsby
import { Link as LinkGatsby } from "gatsby"

export const Navbar = styled.header`
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

export const Link = styled(LinkGatsby)`
  color: white;
  text-decoration: none;
`
