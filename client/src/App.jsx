import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages/index";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Home />
      <CreatePost />
    </div>
  );
}

export default App;
