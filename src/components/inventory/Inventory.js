import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";

const Inventory = ({ inventory }) => {
  const { _id, name, img, quantity, price, description, supplier } = inventory;

  // const [inventories, setInventories] = useState([]);
  const [inventories, setInventories] = useInventory();

  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  // const handleDelete = (id) => {
  //   const proceed = window.confirm("You want to delete. Are you sure?");

  //   if (proceed) {
  //     const url = `https://stormy-crag-58273.herokuapp.com/inventory/${id}`;

  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const remaining = inventories.filter(
  //           (inventory) => inventory._id !== id
  //         );
  //         setInventories(remaining);
  //         window.location.reload(false);
  //       });
  //   }
  // };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h4>{name}</h4>{" "}
          </Card.Title>
          <Card.Text>
            {" "}
            <small>{description}</small>{" "}
          </Card.Text>
          <h5 className="text-danger mb-3">৳{price}</h5>
          <h6>Quantity: {quantity}</h6>
          <Card.Text> Supplier: {supplier}</Card.Text>
        </Card.Body>
        <button
          onClick={() => navigateToDetails(_id)}
          className="subBtn text-white"
        >
          Stock update
        </button>
        {/* <button onClick={() => handleDelete(inventory._id)} className="spBtn ">
          Delete
        </button> */}
      </Card>
    </div>
  );
};

export default Inventory;
