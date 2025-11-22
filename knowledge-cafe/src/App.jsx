import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs';


function App() {

  const [bookmarked, setBookmarked] = useState([])

  const handleBookMark = (blog) => {
    const newBookmarked = [...bookmarked, blog];
    setBookmarked(newBookmarked);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex border rounded-2xl m-15 p-10 gap-10 bg-slate-400 text-center font-serif">

        <div className="blogs-container w-[70%] bg-blue-200 border border-none rounded-sm text-black p-7">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>

        <div className="bookmark-container w-[30%] bg-blue-200 border border-none rounded-sm text-black p-7">
          <div className='bg-slate-400 p-2 rounded-sm mb-1.5'>
            <h3>Rading Time : </h3>
            <h3>Added To Bookmark : </h3>
          </div>         
            {
              bookmarked.map((marked) =>
                <p key={marked.id} className='border-b-2'>{marked.title}</p>
              )
            }         
        </div>

      </div>
    </>
  )
}

export default App
