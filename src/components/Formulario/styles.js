import styled from "styled-components"

export const Form = styled.form`
  padding: 16px 0;
  width: 90%;
  margin-left: 10px;
`
export const Input = styled.input`
  border: 2px solid #f1c40f;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`
export const Error = styled.span`
  font-size: 14px;
  color: red;
`
export const H2 = styled.h2`
  text-align: center;
  font-weight: 500;
  padding: 8px 0;
`
export const TextArea = styled.textarea`
  border: 2px solid #f1c40f;
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
  color: rgb(108, 52, 131);
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  border-radius: 20px;

  &:hover {
    background: #f5b041;
    color: #fff !important;
  }
`
