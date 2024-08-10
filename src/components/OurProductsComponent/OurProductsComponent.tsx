import { FunctionComponent } from "react";
import { Card } from "react-bootstrap";

import "./OurProductsComponent.scss";

import StationaryImage from "../../assets/images/Stationary.webp";
import CalendarsImage from "../../assets/images/Calendars.webp";
import DiariesImage from "../../assets/images/Diaries.webp";

const OurProductsComponent: FunctionComponent = () => {
  const products = [
    {
      image: StationaryImage,
      title: "Stationery",
      description:
        "Explore our wide range of stationery products to inspire your creativity.",
    },
    {
      image: CalendarsImage,
      title: "Calendars",
      description:
        "Discover our selection of custom calendars to keep you organized.",
    },
    {
      image: DiariesImage,
      title: "Diaries",
      description:
        "Browse through our collection of beautifully crafted diaries that last.",
    },
  ];
  return (
    <div className="main-container" id="products">
      <h2 className="products-heading">Our Products</h2>
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <Card key={index} className="category-card">
              <Card.Img
                variant="top"
                src={product.image}
                className="card-img-top"
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{product.title}</Card.Title>
                <Card.Text className="card-text">
                  {product.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurProductsComponent;
