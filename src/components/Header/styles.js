import styled from "styled-components"
// Le cambio el nombre a LinkGatsby
import { Link as LinkScroll } from "react-scroll"
import Headroom from "react-headroom"
//color que me pidio oscar: #00aae4
//color que tenia antes:#6c3483
export const Navbar = styled(Headroom)`
  background: #00aae4;
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

export const H1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: 'Epilogue', sans-serif;
  span {
    font-size: 2rem;
  }
`

export const H2 = styled.h2`
         font-size: 2rem;
         color: #fff;
         font-family: "Epilogue", sans-serif;
         text-border: 2px;
         span {
           font-size: 2rem;
         }
`