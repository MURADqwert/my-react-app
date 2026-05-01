import { Suspense } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';



function App() {
  const countriesPromis = fetch('https://openapi.programming-hero.com/api/all')
.then(res=> res.json())
  return (
    <div>
      
      <Suspense fallback= {<p>Data Loading..</p>}>
        <Countries countriesPromis={countriesPromis}>
        </Countries>
      </Suspense>
    </div>
    
  );
}



export default App;