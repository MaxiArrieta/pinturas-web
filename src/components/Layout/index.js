import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Helmet from "react-helmet"
import { GlobalStyle } from "../../styles"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Pinturas Pablo</title>

        <link
          href="https://fonts.googleapis.com/css?family=Bitter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,700italic,900,900italic"
          rel="stylesheet"
        />
        {/* <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script> */}
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
