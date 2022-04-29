import React from "react";
import useInventory from "../../hooks/useInventory";
import Inventory from "../inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useInventory();
  return (
    <div className="container">
      <h2 className="text-center text-primary my-5">Explore All Inventories</h2>

      <div className="row row-cols-lg-3 row-cols-md-2 g-4">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
