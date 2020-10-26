import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`
export const TextoImagen = styled.div`
         background-image: linear-gradient(
           to top,
           rgba(34, 49, 63, 0.8),
           rgba(34, 49, 63, 0.8)
         );
         color: #fff;
         height: 100%;
         display: flex;
         flex-direction: column;
         flex: 1;
         align-items: center;
         justify-content: center;
         h2 {
           font-size: 4rem;
           font-family: "Epilogue", sans-serif;
           margin: 0%;
           text-align: center;
           @media (min-width: 768px) {
             font-size: 5.8rem;
           }
         }
         p {
           font-family: "Poppins", sans-serif;
           font-size: 2rem;
           text-align: center;
           margin-left: 10px;
           margin-right: 10px;
           @media (min-width: 768px) {
             font-size: 2.6rem;
           }
         }
       `
