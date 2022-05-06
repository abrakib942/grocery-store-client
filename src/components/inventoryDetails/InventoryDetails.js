import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { id } = useParams({});
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `https://stormy-crag-58273.herokuapp.com/inventory/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div className="text-center">
      <h2 className=" text-center my-5"> id: {inventory._id} </h2>
      <h5> {inventory.name} </h5>
      <img src={inventory.img} alt="" />
      <p> {inventory.description} </p>
      <h5 className="my-3 text-danger"> ৳{inventory.price} </h5>
      <h6> Quantity: {inventory.quantity} </h6>
      <p>Supplier: {inventory.supplier} </p>

      <button className="btn-outline-success">Delivered</button>
    </div>
  );
};

export default InventoryDetails;
