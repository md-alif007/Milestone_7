import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs';


const knowledgePromise = fetch('knowledge.json').then(res => res.json());
console.log(knowledgePromise);

function App() {



  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h3>Informations are loading....</h3>}>
          <Blogs knowledgePromise={knowledgePromise}></Blogs>
      </Suspense>
    </>
  )
}

export default App
