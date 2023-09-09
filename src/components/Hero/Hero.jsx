import { HeroStyle } from "./HeroStyled";
import Products from "../Podructs/Products";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import { carrouselHero } from "../Utils/arrayCarrousel";

const Hero = () => {
    const renderSlides = carrouselHero.map((image) => (
        <div key={image.alt}>
            <img className="imgHero" src={image.url} alt={image.alt} />
        </div>
    ));

    return (
        <>
            <HeroStyle>
                <Carousel
                    ariaLabel={false}
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    dynamicHeight={false}
                    centerMode={true}
                    centerSlidePercentage={50}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
            </HeroStyle>
            <Products />
            <AboutUs />
            <Contact />
        </>
    )
}

export default Hero
