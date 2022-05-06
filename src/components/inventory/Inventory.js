import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const { _id, name, img, quantity, price, description, supplier } = inventory;

  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/inventory/${id}`);
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
          onClick={() => navigateToDetails(_id)}
          className="btn btn-success text-white"
        >
          Stock update
        </button>
        <button className="btn btn-outline-danger ">Delete</button>
      </Card>
    </div>
  );
};

export default Inventory;
