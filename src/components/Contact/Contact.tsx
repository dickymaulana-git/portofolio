import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import whatsapp from '../../assets/whatsapp.svg'

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:dicky.maulana@live.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:dicky.maulana@live.com">dicky.maulana@live.com</a>
        </div>
        <div>
        <a href="https://api.whatsapp.com/send/?phone=%2B6281298799797&text=Hello+Dicky"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+6281298799797">(+62) 81298799797</a>
        </div>  
      </div>
      <Form />
    </Container>
  )
}