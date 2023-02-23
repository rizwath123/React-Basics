// import logo from './logo.svg';
import './App.css';
// import { Post } from './Components/Post';
import { PostsList } from './Components/PostsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
      
      {/* <main> */}
        <PostsList />
      {/* </main> */}
    </div>
  );
}

export default App;
