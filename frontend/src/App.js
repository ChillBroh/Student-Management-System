import "./App.css";
import Header from "./Components/header";
import AddStudent from "./Components/AddStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowStudents from "./Components/ShowStudent";
import ShowOne from "./Components/ShowOne";

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
          <Route path="/get/:id" exact Component={ShowOne} />
          <Route path="/add" exact Component={AddStudent} />
          <Route path="/get" exact Component={ShowStudents} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
