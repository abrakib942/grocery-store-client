import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import Banner from "./Banner";
import Footer from "../footer/Footer";

import Inventory from "../inventory/Inventory";
import Special from "./Special";
import SpecialTwo from "./SpecialTwo";
import Slider from "./Slider";

const Home = () => {
  const [inventories, setInventories] = useInventory();
  return (
    <div>
      <Slider />

      <Banner />

      <div className="container">
        <h2 className="text-primary text-center my-5">Inventories</h2>

        <div className=" row row-cols-lg-3 row-cols-md-2 g-4 text-center ">
          {inventories.slice(0, 6).map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </div>
        <div className="text-center">
          <Link to="/manage" className="btn spBtn text-white  my-5">
            Manage Inventories
          </Link>
        </div>
      </div>

      <Special />

      <SpecialTwo />

      <Footer />
    </div>
  );
};

export default Home;
