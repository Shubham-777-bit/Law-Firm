import Navbar from './components/Navbar/Navbar';
import './App.css';
import Herosection from './components/Herosection/Herosection';
import Section from './components/Introduction_section/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Section/>
    </div>
  );
}

export default App;

