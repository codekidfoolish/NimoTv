import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Live from './pages/live/Live'
import Category from './pages/category/Category'
import Esports from './pages/esports/Esports'


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/live' element={<Live />} />
          <Route path='/games' element={<Category />} />
          <Route path='/esports' element={<Esports />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
