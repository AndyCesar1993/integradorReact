import LogoRaleigh from '../../assets/img-AboutUs/LogoRaleigh.jpg'
import LogoContinental from '../../assets/img-AboutUs/LogoContinental.jpg'
import LogoShimano from '../../assets/img-AboutUs/LogoShimano.jpg'
import LogoHaro from '../../assets/img-AboutUs/LogoHaro.jpg'
import LogoSuntour from '../../assets/img-AboutUs/LogoSuntour.jpg'
import LogoMerida from '../../assets/img-AboutUs/LogoMerida.jpg'
import LogoRally from '../../assets/img-AboutUs/LogoRally.jpg'
import LogoGt from '../../assets/img-AboutUs/LogoGt.jpg'
import LogoOlmo from '../../assets/img-AboutUs/LogoOlmo.jpg'
import LogoTrek from '../../assets/img-AboutUs/LogoTrek.jpg'
import ImgAboutUS from '../../assets/img-AboutUs/montainAndBike.jpg'
//import Carousel from 'better-react-carousel'
import { AbouUsInfoStyle, AboutUsStyle } from './AboutUsStyled'

const AboutUs = () => {
    return (
            <AboutUsStyle>
                <AbouUsInfoStyle>
                    <h1>Sobre Nosotros</h1>
{/*                     <Carousel  cols={4} rows={1} autoplay={1000} loop >
                        <Carousel.Item>
                            <img className='CarrouselItemImg' src={LogoRaleigh} alt="logo raleight" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='CarrouselItemImg' src={LogoContinental} alt="logo continental" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='CarrouselItemImg' src={LogoShimano} alt="logo shimano" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  className='CarrouselItemImg' src={LogoHaro} alt="logo haro" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  className='CarrouselItemImg' src={LogoSuntour} alt="logo suntour" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  className='CarrouselItemImg' src={LogoMerida} alt="logo merida" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  className='CarrouselItemImg' src={LogoRally} alt="logo rally" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  className='CarrouselItemImg' src={LogoGt} alt="logo gt" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  className='CarrouselItemImg' src={LogoOlmo} alt="logo olmo" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='CarrouselItemImg' src={LogoTrek} alt="logo trek" />
                        </Carousel.Item> 
                    </Carousel> */}
                    <div>
                        <p>Nos centramos en asesorar de manera particular a cada cliente, respondemos sus inquitudes y ofrecemos un
                            producto acorde a sus necesidades, no dude en contactarse con nosotros a través del icono de WhatsApp o
                            dirigiendose a nuetra sucursal.</p>
                    </div>
                </AbouUsInfoStyle>
                <img src={ImgAboutUS} className='AboutUsImg' alt="imagen de montaña"/>
            </AboutUsStyle>
    )
}

export default AboutUs
