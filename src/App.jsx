import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/blog/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import Editblogs from "./pages/blog/Editblogs";
import SingleBlog from "./pages/blog/SingleBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogadd" element={<AddBlog />} />
          <Route path="/blog/edit/:id" element={<Editblogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
