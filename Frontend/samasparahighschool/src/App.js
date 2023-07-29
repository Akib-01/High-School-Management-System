import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Academics from "./Components/Academics";
import Activities from "./Components/Activities";
import Administration from "./Components/Administration";
import Admission from "./Components/Admission";
import Contact from "./Components/Contact";
import Facilities from "./Components/Facilities";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Notice from "./Components/Notice";
import Results from "./Components/Results";
import "./tailwind.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
