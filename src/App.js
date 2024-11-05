import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Greet from './components/greet';
import Messages from './components/messages';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Greet />
      <Messages />
      <Footer />  
    </div>
  );
}

export default App;
