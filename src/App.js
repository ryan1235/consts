// --paginas--
import Contact from '../src/Components/pages/Contact.js'
import Company from '../src/Components/pages/Company.js'
import NewProject from '../src/Components/pages/NewProject.js'
import Home from './Components/pages/Home.js';

// --Importação das rotas--
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// --Layouts--
import Navbar from './Components/layout/Navbar.js';
import Conteiner from './Components/layout/Conteiner.js';
import Projects from './Components/pages/Projects.js';
import Footer from './Components/layout/Footer.js';

function App() {
  return (
        <BrowserRouter>
            <Navbar/>
              <Conteiner customClass='min-hight'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Company" element={<Company />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/NewProject" element={<NewProject />} />
                  <Route path="/Projects" element={<Projects />} />
                </Routes>
              </Conteiner>
            <Footer/>
      </BrowserRouter>
  );
}

export default App;
