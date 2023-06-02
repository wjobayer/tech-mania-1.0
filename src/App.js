import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Students from './components/Students';
import Teachers from './components/Teachers';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Teachers></Teachers>
      <Students></Students>
      <Footer></Footer>
    </div>
  );
}

export default App;
