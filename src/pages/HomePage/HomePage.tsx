import { FunctionComponent } from "react";
import TopBarComponent from "../../components/TopBarComponent/TopBarComponent";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import OurValuesComponent from "../../components/OurValuesComponent/OurValuesComponent";
// import TestimonialComponent from "../../components/TestimonialsComponent/TestimonialsComponent";
import ContactUsComponent from "../../components/ContactUsComponent/ContactUsComponent";
import OurProductsComponent from "../../components/OurProductsComponent/OurProductsComponent";

const HomePage: FunctionComponent = () => {
  return (
    <div className="container">
      <TopBarComponent />
      <CarouselComponent />
      <OurValuesComponent />
      <OurProductsComponent />
      {/* <TestimonialComponent /> */}
      <ContactUsComponent />
    </div>
  );
};

export default HomePage;
