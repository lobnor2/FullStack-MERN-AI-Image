import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-1 shadow-xs">
          <Link to={"/"}>Logo</Link>
          <Link to={"/create-post"}>
            <Button variant={"outline"} className="cursor-pointer">
              Create
            </Button>
          </Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
