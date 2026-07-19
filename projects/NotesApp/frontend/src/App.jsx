import './App.css'
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import NotesList from './components/NotesList.jsx';
import SearchBar from './components/SearchBar.jsx';
import FloatingButton from './components/FloatingButton.jsx';
import initialNotes from './data/data.js';
import { useState } from 'react';

import AddNoteModal from './components/AddNoteModal.jsx';

function App() {
  const [notes,setNotes] = useState(initialNotes);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const modalOpen = () => setIsModalOpen(true);
  const modalClose = () => setIsModalOpen(false);

  const handleAddNote = (newNote) => {
      console.log(newNote);
      setNotes(prevNotes => [...prevNotes, newNote]);
      modalClose();
  }

  const handleDelete=(id)=>{
    console.log(id);
    setNotes(prevNotes => prevNotes.filter((note)=>note.id!==id));
    console.log(notes);
  }

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
              <NotesList notes={notes} onDelete={handleDelete}/>
          </div>
          <div className='fixed bottom-4 right-4'>
            <FloatingButton onClick={modalOpen}/>
          </div>
          {isModalOpen && <AddNoteModal onClose={modalClose} onAddNote={handleAddNote}/>}               
        </section>
      </main>
    </div>
  )
}

export default App
