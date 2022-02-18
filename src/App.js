import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './Components/CommonComponents/NavBar/Navbar';
import Toggle from "./Components/Toggle/Toggle";
import About from './Pages/AboutUs_Page/About';
import Contact from './Pages/ContactUs_Page/Contact';
import Home from './Pages/Home_Page/Home';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
