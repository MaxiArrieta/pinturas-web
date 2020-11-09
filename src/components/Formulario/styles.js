import ReCAPTCHA from "react-google-recaptcha"
import styled from "styled-components"

export const Form = styled.form`
  padding: 16px 0;
  width: 90%;
  margin-left: 10px;
  label {
    font-family: "Epilogue", sans-serif;
  }
`
export const Input = styled.input`
  border: 2px solid #212f3d;
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: none;
  ::placeholder {
    font-family: "Poppins", sans-serif;
  }
`
export const Error = styled.span`
  font-size: 14px;
  color: red;
`
export const H2 = styled.h2`
  text-align: center;
  font-weight: 500;
  font-family: "Epilogue", sans-serif;
  border-color: #000;
  font-size: 2.8rem;
  padding: 8px 0;
`
export const TextArea = styled.textarea`
  ::placeholder {
    font-family: "Poppins", sans-serif;
  }
  border: 2px solid #212f3d;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  height: 100px;
`
export const Boton = styled.input`
  margin-top: 2rem;
  margin-bottom: 8px;
  padding: 8px 4px;
  background-color: #f1c40f;
  width: 100%;
  color: #000;
  /* rgb(108, 52, 131); */
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Epilogue", sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 20px;

  &:hover {
    background: #f5b041;
    color: #fff !important;
  }
`
export const RECaptcha = styled(ReCAPTCHA)`
  @media (max-width: 350px) {
    transform: scale(0.84);
    -webkit-transform: scale(0.84);
  }

  @media (max-width: 310px) {
    transform: scale(0.74);
    -webkit-transform: scale(0.74);
  }
`
