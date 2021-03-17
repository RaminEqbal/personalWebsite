import logo from './logo.svg';
import './App.css';


import AboutMe from './components/AboutMe.component'
import Navbar from './components/Navbar.component'
import Projects from './components/Projects.component'
import Contact from './components/Contact.component'
import Footer from './components/Footer.component'

function App() {
  return (
    <div className="App">
    <Navbar />
    <AboutMe />
    <Projects />
    <Contact />
    <hr class="divider" />
    <Footer />
    </div>
  );
}

export default App;
