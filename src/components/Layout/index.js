import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Helmet from "react-helmet"
import { GlobalStyle } from "../../styles"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Pintor E. BENITEZ</title>

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,700italic,900,900italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        {/*Esto es un estilo poppins de 400 que me pidio oscar*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital@1&display=swap"
          rel="stylesheet"
        />
        {/*Esto es un estilo Epilogue italic de 400 que me pidio oscar*/}
      </Helmet>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
