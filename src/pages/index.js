import React from "react"
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
