import styled from "styled-components"
import { Link as LinkScroll } from "react-scroll"

export const Container = styled.footer`
  width: 100%;
  height: 150px;
  background-color: #4a235a;
  color: #fff;
  padding-top: 5px;
  /* display: grid; */
  text-align: center;
  p {
    text-align: center;
  }
`
export const Link = styled(LinkScroll)`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "Bitter", serif;
  text-decoration: none;
  padding: 1rem;
  margin-top: 1rem;
  /* margin-right: 1rem; */

  &:last-of-type {
    margin-right: 0;
  }
  /* &.pagina-actual {
    border-bottom: 2px solid #fff;
  } */
  &:hover {
    box-shadow: inset 0 0 20px rgb(249, 231, 159, 0.5),
      0 0 20px rgba(249, 231, 159, 0.4);
    outline-color: rgba(249, 231, 159, 0);
    outline-offset: 80px;
    text-shadow: 1px 1px 6px #fff;
    /* border-shadow: 20px; */
  }
`
export const Span = styled.span`
  color: #fff;
  text-decoration: none;
`
