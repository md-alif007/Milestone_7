import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries';

function App() {

  const countriesPromise = fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,languages,currencies,flags,area,population")
    .then(res => res.json());


  return (
    <>  
      <Suspense fallback={<h3>country loading....</h3>}>
        <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>

    </>
  )
}

export default App
