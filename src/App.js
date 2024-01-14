import Navbar from './components/Navbar/Navbar';
import './App.css';
import Herosection from './components/Herosection/Herosection';
import Section from './components/Introduction_section/Section';
import WhyChooseUsSection from './components/whychooseus/whychooseus';
import Gallery from './components/Areaofpractice_section/Gallery';
import OurTeam from './components/Team/Team';
import ClientComponent from './components/Clinet_Section/Client';

function App() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Section/>
      <WhyChooseUsSection/>
      <Gallery/>
      <ClientComponent/>
      <OurTeam/> 
    </div>
  );
}

export default App;

