import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={slider2} alt="First slide" />

          <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
            <h2 className="text-success fw-semibold">Groci</h2>
            <h1 className="text-danger fst-italic fw-bold">
              Vegetable 100% <br />
              Organic
            </h1>
            <p>
              Natural Health Care Ingredients <br />
              50% Off{" "}
            </p>
            <button className="spBtn mb-5">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={slider1} alt="Second slide" />
          <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
            <h6 className="ms-auto">100% Healthy & Affordable</h6>
            <h1 className="ms-5 text-success fst-italic fw-bold ms-auto">
              Organic Vegetables
            </h1>
            <h5 className=" ms-auto fw-semibold">
              Small Changes Big Difference
            </h5>
            <button className="subBtn ms-auto">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
            <h5 className="fw-semibold">Natural Health Care Ingredients</h5>
            <h1 className="fst-italic fw-bold text-danger">Grocery Shopping</h1>
            <p>Save upto 30% off</p>
            <button className="spBtn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
