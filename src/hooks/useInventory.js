import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("https://stormy-crag-58273.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return [inventories, setInventories];
};

export default useInventory;
