import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Menubar from "./components/menubar/Menubar";
import Notfound from "./components/notfound/Notfound";
import Blogs from "./components/blogs/Blogs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import Inventories from "./components/inventories/Inventories";
import AddItem from "./components/addItem/AddItem";
import ManageItem from "./components/manageItem/ManageItem";
import MyItem from "./components/myItem/MyItem";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import InventoryDetails from "./components/inventoryDetails/InventoryDetails";

function App() {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/manage"
          element={
            <PrivateRoute>
              <Inventories />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <PrivateRoute>
              <InventoryDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/add" element={<AddItem />}></Route>
        <Route path="/manage" element={<ManageItem />}></Route>
        <Route path="myItem" element={<MyItem />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
