import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/myItem?email=${email}`;

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
    <div>
      <h2 className="text-center my-5">My Items: {items.length} </h2>
    </div>
  );
};

export default MyItem;
