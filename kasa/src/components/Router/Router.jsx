import {Routes, Route} from "react-router-dom"
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import Logement from "../../pages/Logement/Logement"

function Router() {
  return (      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:objectId" element={<Logement />} />
      </Routes>
  );
}

export default Router;