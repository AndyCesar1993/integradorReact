import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImgAboutUS from '../../assets/img-AboutUs/montainAndBike.jpg'
import { AbouUsInfoStyle, AboutUsStyle } from './AboutUsStyled'
import {carrouselAboutUs} from '../Utils/arrayCarrousel'

const AboutUs = () => {
    const renderSlides = carrouselAboutUs.map((image) => (
        <div key={image.alt}>
            <img src={image.url} alt={image.alt} />
            <p className="legend">{image.alt}</p>
        </div>
    ));

    return (
        <AboutUsStyle>
            <AbouUsInfoStyle>
                <h1>Sobre Nosotros</h1>
                <Carousel
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    centerMode={true}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
                <div>
                    <p>Nos centramos en asesorar de manera particular a cada cliente, respondemos sus inquitudes y ofrecemos un
                        producto acorde a sus necesidades, no dude en contactarse con nosotros a través del icono de WhatsApp o
                        dirigiendose a nuetra sucursal.</p>
                </div>
            </AbouUsInfoStyle>
            <img src={ImgAboutUS} className='AboutUsImg' alt="imagen de montaña" />
        </AboutUsStyle>
    )
}

export default AboutUs
