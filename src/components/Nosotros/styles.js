import styled from "styled-components"

export const TextoImagen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 3.2rem;
    padding: 10px;
    margin: 0%;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }
  p {
    /* font-size: 1rem; */
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
`
