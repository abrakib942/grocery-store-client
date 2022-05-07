import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import Inventory from "../inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useInventory();
  return (
    <div className="container text-center">
      <h2 className="text-center text-primary my-5">Explore All Inventories</h2>

      <div className="row row-cols-lg-3 row-cols-md-2 g-4">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
        <div className="mx-auto my-5">
          <Link to="/add">
            <button className="btn btn-outline-primary ">Add New Item</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventories;
