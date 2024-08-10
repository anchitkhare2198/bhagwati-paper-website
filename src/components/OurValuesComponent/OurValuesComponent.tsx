import { FunctionComponent } from "react";

import "./OurValuesComponent.scss";

const OurValuesComponent: FunctionComponent = () => {
  const values = [
    {
      title: "Sustainability",
      description:
        "We don't want to waste, so we have recyclable pencils, eco-friendly packaging, and more.",
    },
    {
      title: "Quality",
      description:
        "Our products are crafted with the highest quality materials, ensuring durability and a premium feel.",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of the curve by incorporating the latest trends and technology into our offerings.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our customers are our top priority. We strive to exceed expectations with every order.",
    },
    {
      title: "Community Engagement",
      description:
        "We believe in giving back. A portion of our profits goes to supporting local communities.",
    },
  ];

  return (
    <section className="our-values" id="values">
      <h2>Our Values</h2>
      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesComponent;
