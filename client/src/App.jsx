import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4">
          <Link to={"/"}>Logo</Link>
          <Link to={"/create-post"}>Create</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
