import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/Home';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
