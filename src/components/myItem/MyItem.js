import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `https://stormy-crag-58273.herokuapp.com/myItem?email=${email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  return (
    <div>
      <h2 className="text-center my-5">My Items: {items.length} </h2>
    </div>
  );
};

export default MyItem;
