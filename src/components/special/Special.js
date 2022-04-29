import React from "react";
import slider from "../../images/slider.png";

const Special = () => {
  return (
    <div className=" mb-5">
      <div className="banner">
        <img src={slider} alt="" />
        <h2 className="title">
          Special Discount For All <br /> Grocery Products
        </h2>
        <p className="text">
          20% discount on bkash payment in <br /> all of our fruits and
          vegetables item
        </p>
        <button className="spBtn">Buy Now</button>
      </div>
    </div>
  );
};

export default Special;
