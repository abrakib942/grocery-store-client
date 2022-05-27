import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventoryDetails = () => {
  const { id } = useParams({});
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `https://stormy-crag-58273.herokuapp.com/inventory/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  const handleDelivered = () => {
    setInventory({
      ...inventory,
      quantity: inventory.quantity - 1,
    });
  };

  const restockItem = (event) => {
    event.preventDefault();

    if (event.target.number.value < 1) {
      setInventory(inventory);
      toast("Invalid Input");
    } else {
      setInventory({
        ...inventory,
        quantity: inventory.quantity + parseInt(event.target[0].value),
      });
    }

    event.target.reset();
  };

  return (
    <div className="text-center">
      <div className="mb-5">
        <h2 className=" text-center my-5"> id: {inventory._id} </h2>
        <h5> {inventory.name} </h5>
        <img src={inventory.img} alt="" />
        <p> {inventory.description} </p>
        <h5 className="my-3 text-danger"> ৳{inventory.price} </h5>
        <h6> Quantity: {inventory.quantity} </h6>
        <p>Supplier: {inventory.supplier} </p>

        {inventory.quantity === 0 ? (
          <h6 className="text-danger">Sold out</h6>
        ) : (
          <button onClick={handleDelivered} className="btn-outline-success">
            Delivered
          </button>
        )}
      </div>

      <div className="mb-5">
        <h3 className="text-primary my-3">Restock the items</h3>
        <form onSubmit={restockItem}>
          <input
            type="number"
            name="number"
            id=""
            placeholder="Enter quantity"
            required
          />

          <input className="btn-success" type="submit" value="Restock" />
        </form>
      </div>
    </div>
  );
};

export default InventoryDetails;
