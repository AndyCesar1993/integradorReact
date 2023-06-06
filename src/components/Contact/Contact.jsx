import  Ahora12 from '../../assets/medios-de-pago/ahora12-icon.jpg'
import  AmericanExpress from '../../assets/medios-de-pago/american-express-icon.png'
import  BankTransfer from '../../assets/medios-de-pago/bank_transfer_in_icon.png'
import  Cabal from '../../assets/medios-de-pago/cabal-icon.png'
import  Mastercard from '../../assets/medios-de-pago/mastercard-icon.png'
import  MP from '../../assets/medios-de-pago/mercado-pago-icon.png'
import  PF from '../../assets/medios-de-pago/pagofacil-icon.png'
import  RP from '../../assets/medios-de-pago/rapipago-icon.png'
import  Visa from '../../assets/medios-de-pago/visa-icon.png'
import FaceLogo from '../../assets/facebook-circled--v1.png'
import InstaLogo from '../../assets/instagram-new--v1.png'
import TwitterLogo from '../../assets/twitter--v3.png'
import { Call, Email, Facebook, Instagram, LocationOn, Twitter, WhatsApp } from '@mui/icons-material'
import Iframe from 'react-iframe'
import { ContactStyle, ContactanosStyle, MapStyle, PagosStyle, RedesStyle } from './ContactStyled'

const Contact = () => {
    return (
        <ContactStyle>
            <ContactanosStyle>
                <h2>Contactese con nosotros</h2>
                <p><WhatsApp/>15-60754086</p>
                <p><Call/>011-1235-2036</p>
                <p><Email/>bike.store@gmail.com</p>
                <p><LocationOn/>San Martin 773, Pilar, Buenos Aires</p>
            </ContactanosStyle>
            <RedesStyle>
                <h2>Siguenos en nuestras redes</h2>
                <div>
                    <a target="_blank" href="https://www.instagram.com/"><img src={InstaLogo}/></a>
                    <a target="_blank" href="https://es-la.facebook.com/"><img src={FaceLogo}/></a>
                    <a target="_blank" href="https://twitter.com/"><img src={TwitterLogo}/></a>
                </div>
            </RedesStyle>
            <PagosStyle>
                <h2>Medios de Pago</h2>
                <div>
                    <img src={Ahora12} alt="Ahora 12" />
                    <img src={BankTransfer} alt="transferencia bancaria" />
                    <img src={MP} alt="Mercado Pago" />
                    <img src={Visa} alt="Visa" />
                    <img src={Mastercard} alt="Mastercard" />
                    <img src={AmericanExpress} alt="American Express" />
                    <img src={Cabal} alt="Cabal" />
                    <img src={PF} alt="Pago Facil" />
                    <img src={RP} alt="Rapi Pago" />
                </div>
            </PagosStyle>
            <MapStyle>
                <Iframe
                    className='mapStyle'
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1343.7745246846398!2d-58.91538530427814!3d-34.4596631791557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9cce08dcf2a3%3A0x2a553b684fd3b5df!2sSan%20Mart%C3%ADn%20773%2C%20B1629ETO%20Pilar%20Centro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1672584713658!5m2!1ses-419!2sar"
                />
            </MapStyle>
        </ContactStyle>
    )
}

export default Contact
