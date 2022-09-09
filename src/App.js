import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Aboutme } from './front/components/Aboutme';
import { Skills } from './front/components/Skills';
import { Footer } from './front/components/Footer';



function App() {
  return (
    <div className="App">
      <Aboutme className="about-carrousel"/>
      
      <Skills/>
      <Footer className="footer-style" />
     
    </div>
  );
}

export default App;
