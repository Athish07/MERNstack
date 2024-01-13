import { BrowserRouter, Route, Routes } from 'react-router-dom';
//link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"></link>
import Navbar from './components/Navbar';
import Home from './home/Home';
import './index.css'; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
        <div className='pages'>
          <label>
            
          </label>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
