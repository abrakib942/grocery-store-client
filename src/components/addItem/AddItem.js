import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const nameRef = useRef("");
  const desRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");
  const suppRef = useRef("");
  const imgRef = useRef("");

  const handleAddItem = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = user.email;
    const description = desRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const supplier = suppRef.current.value;
    const img = imgRef.current.value;

    const addItem = {
      name,
      email,
      description,
      price,
      quantity,
      supplier,
      img,
    };

    const url = `https://stormy-crag-58273.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // for my items

    fetch(`https://stormy-crag-58273.herokuapp.com/myItem`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("item added successfully");
        }
      });

    event.target.reset();
  };

  return (
    <div>
      <h2 className="text-center my-5">Add Items</h2>
      <form onSubmit={handleAddItem} className="row w-25 mx-auto">
        <input
          ref={nameRef}
          className="mb-2"
          type="text"
          name="text"
          placeholder="Product name"
          id=""
          required
        />
        <input
          value={user.email}
          className="mb-2"
          type="email"
          name="email"
          placeholder="Email"
          id=""
          readOnly
          required
        />
        <textarea
          ref={desRef}
          className="mb-2"
          type="text"
          name="description"
          placeholder="description"
          id=""
          required
        />
        <input
          ref={priceRef}
          className="mb-2"
          type="number"
          name="number"
          placeholder="Price"
          id=""
          required
        />
        <input
          ref={quantityRef}
          className="mb-2"
          type="number"
          name="number"
          placeholder="quantity"
          id=""
          required
        />
        <input
          ref={suppRef}
          className="mb-2"
          type="text"
          name="text"
          placeholder="supplier"
          id=""
          required
        />
        <input
          ref={imgRef}
          className="mb-2"
          placeholder="Photo URL"
          type="text"
        />
        <input className="btn-outline-success" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
