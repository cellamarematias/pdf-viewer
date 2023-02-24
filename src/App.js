import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
