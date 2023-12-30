import "./App.css";

//routers
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import HomePage from "./views/HomePage";
import Navbar from "./widgets/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="sppukar-main-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
