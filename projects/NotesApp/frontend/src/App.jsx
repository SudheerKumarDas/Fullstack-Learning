import './App.css'
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import NotesList from './components/NotesList.jsx';
import SearchBar from './components/SearchBar.jsx';
import FloatingButton from './components/FloatingButton.jsx';
import initialNotes from './data/data.js';
import { useState } from 'react';

function App() {
  const [notes,setNotes] = useState(initialNotes);

  return (
    <div className='w-full h-screen flex flex-col '>
      <header className='w-full border-b-4 border-gray-400 p-4'>
          <Navbar/>
      </header>
      <main className='flex flex-1'>
        <aside className='w-64 border-r-4 border-gray-400 p-4'>
            <Sidebar/>
        </aside>
        <section className='flex-1'>
          <div className='w-full border-b-4 border-gray-400 p-4'>
              <SearchBar/>
          </div>   
          <div className='p-4'>
              <NotesList notes={notes} setNotes={setNotes}/>
          </div>
          <div className='fixed bottom-4 right-4'>
            <FloatingButton/>
          </div>               
        </section>
      </main>
    </div>
  )
}

export default App
