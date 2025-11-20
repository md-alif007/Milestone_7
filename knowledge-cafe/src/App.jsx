import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs';




function App() {



  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex border rounded-2xl m-15 p-10 gap-10 bg-slate-400 text-center font-serif">

        <div className="blogs-container w-[70%] bg-blue-200 border border-none rounded-sm text-black p-7">
          <Blogs></Blogs>
        </div>

        <div className="bookmark-container w-[30%] bg-blue-200 border border-none rounded-sm text-black p-7">
          bookmarks
        </div>

      </div>
    </>
  )
}

export default App
