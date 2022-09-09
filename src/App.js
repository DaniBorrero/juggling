import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Aboutme } from './front/components/Aboutme';
import { Skills } from './front/components/Skills';



function App() {
  return (
    <div className="App">
      <Aboutme className="about-carrousel"/>
      
      <Skills className="m-5"/>
     
    </div>
  );
}

export default App;
