import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import {Div} from './styles'

export default function SocialLinks() {
    return (
      <Div>
        <a
          href="https://www.facebook.com/ozxkr.benitez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size="3em" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="3em" />
        </a>
      </Div>
    )
}
