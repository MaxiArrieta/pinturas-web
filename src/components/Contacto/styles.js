import styled from "styled-components"
//color que me pidio oscar: #00aae4
//color que tenia antes:rgb(108, 52, 131)
export const Section = styled.section`
         background-color: #00aae4;
         width: 100%;
         color: #fff;
         padding-bottom: 20px;
       `

export const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  h2 {
    text-align: center;
    font-size: 2.8rem;
    font-family: "Epilogue", sans-serif;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
    font-family: 'Poppins', sans-serif;
  }
`
export const Div = styled.div`
  margin-left: 20px;
  padding-top: 50px;

  span {
    margin-left: 15px;
  }
`
export const DivGrid = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`
