import { GitHub, Instagram, Linkedin } from "react-feather"
import { Container } from "./styles"

export function Footer() {
  return (
    <Container>
      <div className="footer-container">
        <span>Made by <b>Eduardo Frota Vicentini</b></span>
        <div className="social-media">
          <a href="https://github.com/edufvicentini/" target="_blank"><GitHub height='20px'  color="gray"/></a>
          <a href="https://www.instagram.com/edufvicentini/" target="_blank"><Instagram height='20px' color="gray"/></a>
          <a href="https://www.linkedin.com/in/eduardofvicentini/" target="_blank"><Linkedin height='20px' color="gray"/></a>
        </div>
      </div>
    </Container>
  )
}