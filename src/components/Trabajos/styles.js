import styled from "styled-components"
import Img from "gatsby-image"

export const Div = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
`
export const DivImagen = styled.div`
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3), 0px 2px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  border-radius: 10px;
  /* height: 100%; */
`

export const H1 = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  /* font-size: 2rem; */
`

export const H2 = styled.h2`
  text-align: center;
  padding: 5px;
  /* font-size: 2rem; */
`

export const Image = styled(Img)`
  height: 80%;
  width: 100%;
  margin: 0;
`
