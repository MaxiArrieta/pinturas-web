import React from "react"
//aca aplique los estilos de bootstrap, para que se apliquen en el proyecto
//import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Nosotros from "../components/Nosotros"

import Trabajos from "../components/Trabajos"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Image />
    <Nosotros />
    <Trabajos />
    <Contacto />
    <Footer />
  </Layout>
)

export default IndexPage
