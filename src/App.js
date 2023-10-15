import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch  } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Header from './components/header';


class App extends React.Component {
  render( ) {
    return (
      <div className="App">      
        <Router>
        <Header/>
          <Routes>
            {/*set home as initial*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />  
            <Route path="/header" element={<Header />} />   
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Router>
      </div>
    )
  }
}


export default App;