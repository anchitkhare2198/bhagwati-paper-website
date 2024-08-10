import { FunctionComponent } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.scss";
import Slide1 from "../../assets/images/slides/Slide-1.jpeg";
import Slide2 from "../../assets/images/slides/Slide-2.jpeg";
import Slide3 from "../../assets/images/slides/Slide-3.jpeg";
import Slide4 from "../../assets/images/slides/Slide-4.jpeg";
import Slide5 from "../../assets/images/slides/Slide-5.jpeg";
import Slide6 from "../../assets/images/slides/Slide-6.jpeg";
import Slide7 from "../../assets/images/slides/Slide-7.jpeg";
import Slide8 from "../../assets/images/slides/Slide-8.jpeg";
import Slide9 from "../../assets/images/slides/Slide-9.jpeg";
import Slide10 from "../../assets/images/slides/Slide-10.jpeg";
import Slide11 from "../../assets/images/slides/Slide-11.jpeg";
import Slide12 from "../../assets/images/slides/Slide-12.jpeg";
import Slide13 from "../../assets/images/slides/Slide-13.jpeg";
import Slide14 from "../../assets/images/slides/Slide-14.jpeg";
import Slide15 from "../../assets/images/slides/Slide-15.jpeg";
import Slide16 from "../../assets/images/slides/Slide-16.jpeg";
import Slide17 from "../../assets/images/slides/Slide-17.jpeg";
import Slide18 from "../../assets/images/slides/Slide-18.jpeg";
import Slide19 from "../../assets/images/slides/Slide-19.jpeg";
import Slide20 from "../../assets/images/slides/Slide-20.jpeg";
import Slide21 from "../../assets/images/slides/Slide-21.jpeg";
import Slide22 from "../../assets/images/slides/Slide-22.jpeg";

const CarouselComponent: FunctionComponent = () => {
  const slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15,
    Slide16,
    Slide17,
    Slide18,
    Slide19,
    Slide20,
    Slide21,
    Slide22,
  ];

  return (
    <div className="carousel-wrapper" id="gallery">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slides" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
