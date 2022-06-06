import React from "react";
import background from "../../images/background.png";

const SpecialTwo = () => {
  return (
    <section
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
      }}
      className="p-5"
    >
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="text-center"
      >
        <div className="subsForm">
          <h3 className="fw-bold mb-3">Subscribe to our Newsletter</h3>
          <input type="email" placeholder="Your email address" /> <br />
          <button className=" subBtn mt-2">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default SpecialTwo;
