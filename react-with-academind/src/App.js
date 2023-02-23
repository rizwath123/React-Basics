// import logo from './logo.svg';
// import './App.css';
// import { Post } from './Components/Post';
import { PostsList } from './Components/PostsList';
import MainHeader from './Components/MainHeader';
import {useState} from 'react'
function App() {
  const [isModalOpen, setISModalOpen] = useState(false)
  

  function showModalHandler(){
    setISModalOpen(true)
  }
    function hideModalHandler() {
        setISModalOpen(false)
    }

  return (
    <div className="App">
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={isModalOpen} onStopPosting={hideModalHandler}/>
      </main>
    </div>
  );
}

export default App;
