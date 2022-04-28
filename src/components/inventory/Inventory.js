import React from "react";
import { Card } from "react-bootstrap";

const Inventory = ({ inventory }) => {
  const { name, img, quantity, price, description, supplier } = inventory;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>৳{price}</p>
          <p>{quantity}</p>
          <Card.Text>{supplier}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventory;
