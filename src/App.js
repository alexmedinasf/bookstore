import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Books from './components/Books';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
