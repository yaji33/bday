import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Greet from './components/greet';
import Messages from './components/messages';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <Greet />
      <Messages />
    </div>
  );
}

export default App;
