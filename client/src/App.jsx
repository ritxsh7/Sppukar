import "./App.css";

//routers
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "./widgets/Navbar/Navbar";

//pages
import HomePage from "./views/HomePage";
import ContributePage from "./views/ContributePage";
import CoursePage from "./views/CoursePage";
import MaterialPage from "./views/MaterialPage";

function App() {
  return (
    <Router>
      <div className="sppukar-main-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/upload-files" element={<ContributePage />}></Route>
          <Route path="/categories/" element={<CoursePage />}></Route>
          <Route path="/material/" element={<MaterialPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
