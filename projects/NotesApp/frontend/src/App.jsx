import './App.css'
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import NotesList from './components/NotesList.jsx';
import SearchBar from './components/SearchBar.jsx';
import FloatingButton from './components/FloatingButton.jsx';

function App() {

  return (
    <div className='w-full h-screen flex flex-col '>
      <div className='w-full border-b-4 border-gray-400 p-4'>
          <Navbar/>
      </div>
      <main className='flex flex-1'>
        <div className='w-64 border-r-4 border-gray-400 p-4'>
            <Sidebar/>
        </div>
        <div className='flex-1'>
          <div className='w-full border-b-4 border-gray-400 p-4'>
              <SearchBar/>
          </div>   
          <div className='p-4'>
              <NotesList/>
          </div>
          <div className='fixed bottom-4 right-4'>
            <FloatingButton/>
          </div>               
        </div>
      </main>
    </div>
  )
}

export default App
