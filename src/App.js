import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Menubar from "./components/menubar/Menubar";
import Notfound from "./components/notfound/Notfound";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
