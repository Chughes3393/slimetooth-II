import './App.css';

// components
import Nav from './components/Nav/index.js'
import Footer from './components/Footer/index.js'

// pages
import Home from './pages/home/index.js'
import About from './pages/about'
import Contact from './pages/contact'
import Shop from './pages/shop'
import Portfolio from './pages/portfolio'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App"
    style={{background: `#9EFF00`}}
    >
      <div id='content-div'>
      <Nav />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='shop' element={<Shop />} />
        <Route path='portfolio' element={<Portfolio />} />

      </Routes>

      <Footer />
      </div>
    </div>
  );
}

export default App;
