import React from "react";
import footer from "../../images/footer.jpg";

const Special = () => {
  return (
    <section
      style={{
        background: `url(${footer})`,
        padding: "60px",
      }}
      data-aos="zoom-in-up"
      data-aos-duration="900"
      data-aos-delay="200"
    >
      <div className="d-flex flex-column align-items-center p-5 text-white banner">
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          Special Discount For All <br /> Grocery Products
        </h2>
        <p data-aos="fade-right" data-aos-duration="900" data-aos-delay="200">
          20% discount on bkash payment in <br /> all of our fruits and
          vegetables item
        </p>
      </div>
      <button className="spBtn d-block mx-auto">Buy Now</button>
    </section>
  );
};

export default Special;
