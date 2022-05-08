import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Item = ({ item }) => {
  const { img, name, description, quantity, price, supplier } = item;

  const [items, setItems] = useState([]);

  const handleItemDelete = (id) => {
    const proceed = window.confirm("You want to delete. Are you sure?");

    if (proceed) {
      const url = `https://stormy-crag-58273.herokuapp.com/myitem/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
          window.location.reload(false);
        });
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h3>{name}</h3>{" "}
          </Card.Title>
          <Card.Text>
            {" "}
            <small>{description}</small>{" "}
          </Card.Text>
          <h3 className="text-danger mb-3">৳{price}</h3>
          <h6>Quantity: {quantity}</h6>
          <Card.Text> Supplier: {supplier}</Card.Text>
        </Card.Body>
        <button
          onClick={() => handleItemDelete(item._id)}
          className="btn btn-outline-danger "
        >
          Delete
        </button>
      </Card>
    </div>
  );
};

export default Item;
