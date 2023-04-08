import "./App.css";
import Header from "./Components/header";
import AddStudent from "./Components/AddStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/add" exact Component={AddStudent} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
