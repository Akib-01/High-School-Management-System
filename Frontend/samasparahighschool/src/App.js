import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Information from "./Components/About/Information";
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
            <Route path="/admission" element={<Admission />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/about/information" element={<Information />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
