
import { Suspense } from 'react'
import './App.css'
import Mobiles from './Components/Mobiles/Mobiles'

const mobilePromise = fetch('../public/phones.json')
  .then(res => res.json())

function App() {

  return (
    <>

      <h2>Buy awesome mobile phones</h2>
      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Mobiles mobilePromise={mobilePromise} ></Mobiles>
      </Suspense>


    </>
  )
}

export default App
