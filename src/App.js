import React, {useState} from 'react';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Header from './components/header';


function App() {

    {/*set home as initial*/}  
    const [currentPage, setCurrentPage] = useState('home');

    return (
      <div className="App">
        <Header setCurrentPage = {setCurrentPage}/>
            {currentPage === 'home' && <Home/>}
            {currentPage === 'about' && <About/>}
            {currentPage === 'contact' && <Contact />}
            {currentPage === 'projects' && <Projects/>}
      </div>
    )
  }


export default App;