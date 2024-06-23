import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../src/Pages/HomePage.jsx';
import Navbar from './Components/Navbar.jsx';
import FAQ from '../src/Pages/FAQ.jsx';
import Aboutus from '../src/Pages/Aboutus.jsx';
import Login from '../src/Pages/Login.jsx';
import Signup from '../src/Pages/Signup.jsx';
import Dashboard from '../src/Pages/Dashboard.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
