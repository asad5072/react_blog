import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/bookmarks/BookMarks'
import Header from './components/header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  
  const handleAddtoBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)  
  }

  return (
    <>
     
      <Header></Header>
      <div className="flex p-4">
        <Blogs handleAddtoBookmark={handleAddtoBookmark}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>

      </div>
      
    </>
  )
}

export default App
