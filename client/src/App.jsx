import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="w-full flex justify-between items-center bg-gray-300 sm:px-8 py-4 border-b-[#e6ebf4]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[cals(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
