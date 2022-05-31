import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="container d-flex align-items-center text-center banner">
      <div>
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          Grocery store with different treasures{" "}
        </h2>
        <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="900">
          We grow berries together with some dedicated growers and pack them for
          you. Straight from the field.
        </p>
      </div>
      <div>
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="w-50 ms-5 bannerImg"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
