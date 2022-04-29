import React from "react";
import useInventory from "../../hooks/useInventory";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

import Inventory from "../inventory/Inventory";

const Home = () => {
  const [inventories, setInventories] = useInventory();
  return (
    <div>
      <div className="container">
        <Banner />

        <h2 className="text-primary text-center my-5">Inventories</h2>

        <div className=" row row-cols-lg-3 row-cols-md-2 g-4 text-center">
          {inventories.slice(0, 6).map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory}></Inventory>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-danger  my-5">Manage Inventories</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
