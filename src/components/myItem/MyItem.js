import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import Item from "../item/Item";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `https://stormy-crag-58273.herokuapp.com/myitem?email=${email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  // useEffect(() => {
  //   const email = user?.email;
  //   const getItems = async () => {
  //     const url = `http://localhost:5000/myItem?email=${email}`;
  //     const { data } = await axios.get(url);
  //     setItems(data);
  //   };
  //   getItems();
  // }, [user]);

  return (
    <div className="container text-center">
      <h2 className=" my-5">My Items: {items.length} </h2>

      <div className="row row-cols-lg-3 row-cols-md-2 g-4">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
