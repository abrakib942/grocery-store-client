import React from "react";
import slider4 from "../../images/slider4.jpg";

const Banner = () => {
  return (
    <section
      style={{
        background: `url(${slider4})`,
        padding: "100px",

        marginBottom: "20px",
      }}
    >
      <div className="d-flex flex-column p-5 banner">
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          Grocery store with different treasures{" "}
        </h2>
        <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="900">
          We grow berries together with some dedicated growers <br /> and pack
          them for you. Straight from the field.
        </p>
      </div>
    </section>
  );
};

export default Banner;
