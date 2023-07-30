import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Academics from "./Components/Academics/Academics";
import Activities from "./Components/Activities/Activities";
import Administration from "./Components/Administration/Administration";
import Admission from "./Components/Admission/Admission";
import Contact from "./Components/Contact/Contact";
import Facilities from "./Components/Facilities/Facilities";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Notice from "./Components/Notice/Notice";
import Results from "./Components/Result/Results";
import "./tailwind.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notice" element={<Notice />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
