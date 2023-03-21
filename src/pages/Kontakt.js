import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

class Kontakt extends React.Component{
    render(){
      const onChange = () => {
        console.log("Verified...");
      };
        return(
          <>
          <div className="contact-grid-container">
            <div className="titlebox2">
              <h1>Frågor eller funderingar?</h1>
            </div>
            <div className="undertitlebox">
              <h1>Kontakta oss!</h1>
            </div>
            <div className="contactform-container">
              <div className="contactformbox">
                <form>
                  <input type="text" name="Namn" placeholder="Namn..." />
                  <input type="email" name="E-post" placeholder="E-post..." />
                  <input type="text" name="Ämne" placeholder="Ämne.." />

                  <textarea
                    name="message"
                    placeholder="Meddelande..."
                    required
                  ></textarea>
                 
                  <ReCAPTCHA 
                    className="reCapt"
                    sitekey="6LcvfgclAAAAAEtw_fHbElR8N07IyVTmB8A4qjYJ"
                    onChange={onChange}
                  />
                  <input type="submit" value="Skicka"/>
                </form>
              </div>
            </div>
            <div className="titlebox1">
              <h1>Hitta hit!</h1>
            </div>
            <div className="maps-container">
        
              <div className="googlebox">
                <iframe title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.3470042583729!2d20.233886451761492!3d63.81890238336692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b9e7a1c3867%3A0x4544875b4be6ddb2!2sBryggargatan%2046%2C%20904%2033%20Ume%C3%A5!5e0!3m2!1ssv!2sse!4v1675331646116!5m2!1ssv!2sse"
                  class="googlebox2"
                  style={{border: 0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="opentimes-container">
              <div className="vertical-line"></div>
              <div className="timestextcontainer">
                <h2 className="adressheader">Adress</h2>
                <p>Bryggargatan 46</p>
                <p>904 33 Umeå</p>
                <h2 className="teleheader">Telefonnummer</h2>
                <p>090 - 13 20 15</p>
              </div>
             </div>
          </div>
          </>
        );
    }
}

export default Kontakt;