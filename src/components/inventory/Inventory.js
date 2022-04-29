import React from "react";
import { Card } from "react-bootstrap";

const Inventory = ({ inventory }) => {
  const { name, img, quantity, price, description, supplier } = inventory;
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
        <button className="btn btn-info text-white">Stock update</button>
      </Card>
    </div>
  );
};

export default Inventory;
