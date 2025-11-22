import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs';


function App() {

  const [bookmarked, setBookmarked] = useState([]);

  const handleBookMark = (blog) => {
    const newBookmarked = [...bookmarked, blog];
    setBookmarked(newBookmarked);
  }

  const [markedRead , setMarkedRead] = useState(0);

  const handleMarkAsRead = (time,id) => {
    const newMarkedRead = (markedRead+time);
    setMarkedRead(newMarkedRead);
    handleRemainingBookMark(id);
  }

  const handleRemainingBookMark = (id) => {
    const remainingBookMark = bookmarked.filter(bookmark => bookmark.id !== id);
    setBookmarked(remainingBookMark);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex border rounded-2xl m-15 p-10 gap-10 bg-slate-400 text-center font-serif">

        <div className="blogs-container w-[70%] bg-blue-200 border border-none rounded-sm text-black p-7">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>

        <div className="bookmark-container w-[30%] bg-blue-200 border border-none rounded-sm text-black p-7">
          <div className='bg-slate-400 p-2 rounded-sm mb-1.5'>
            <h3>Reading Time : {markedRead}</h3>
            <h3>Added To Bookmark : {bookmarked.length}</h3>
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
