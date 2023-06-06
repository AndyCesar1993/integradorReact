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
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/ahora12-icon_ezdcu2.jpg' alt="Ahora 12" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/bank_transfer_in_icon_lwdmaa.png' alt="transferencia bancaria" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/mercado-pago-icon_wgpocu.png' alt="Mercado Pago" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/visa-icon_ltqxvi.png' alt="Visa" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/mastercard-icon_egnnag.png' alt="Mastercard" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/american-express-icon_lvycr3.png' alt="American Express" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/cabal-icon_ata2t9.png' alt="Cabal" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/pagofacil-icon_pwcda3.png' alt="Pago Facil" />
                    <img src='https://res.cloudinary.com/dyarz6hqx/image/upload/v1685294531/rapipago-icon_mp3fit.png' alt="Rapi Pago" />
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
