import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import {Div} from './styles'

export default function SocialLinks() {
    return (
      <Div>
        <a
          href="https://www.facebook.com/Pintor-silletero-profesional-de-edificios-EBenitez-103298451587129"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size="3em" />
        </a>
        <a
          href="https://www.instagram.com/ebpinturaenaltura"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="3em" />
        </a>
      </Div>
    )
}
