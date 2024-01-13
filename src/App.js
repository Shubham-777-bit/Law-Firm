import Navbar from './components/Navbar/Navbar';
import './App.css';
import Herosection from './components/Herosection/Herosection';
import Section from './components/Introduction_section/Section';
import WhyChooseUsSection from './components/whychooseus/whychooseus';


function App() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Section/>
      <WhyChooseUsSection/>
    </div>
  );
}

export default App;

