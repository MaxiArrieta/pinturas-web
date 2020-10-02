import styled from "styled-components"

export const TextoImagen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3.6rem;
    padding: 10px;
    margin: 0%;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 3.3rem;
    }
  }
  p {
    /* font-size: 1rem; */
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    width: 80%;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`
