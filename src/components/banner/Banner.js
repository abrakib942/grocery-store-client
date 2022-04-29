import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="container d-flex align-items-center text-center banner">
      <div>
        <h2>Grocery store with different treasures </h2>
        <p>
          We grow berries together with some dedicated growers and pack them for
          you. Straight from the field.
        </p>
      </div>
      <div>
        <img className="w-50 ms-5 bannerImg" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
