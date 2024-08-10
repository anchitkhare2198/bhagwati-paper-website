import { FunctionComponent } from "react";

import "./TestimonialComponent.scss";

const TestimonialComponent: FunctionComponent = () => {
  const testimonialsData = [
    {
      content:
        "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    },
    {
      content:
        "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    },
    {
      content:
        "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    },
    {
      content:
        "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    },
    {
      content:
        "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    },
    {
      content:
        "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-scroll">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
