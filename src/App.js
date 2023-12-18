import './App.css';
import{getMovieList, searchMovie} from "./API/api"
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    getMovieList()
  }, [])
  const search = (q) =>{
    console.log({q})
  }

  return (
    <div className="App">
      <header className="App-header">
       <nav>Test</nav>
       <div>
        <div className='movie-container'></div>
        <input  
         placeholder='What do u wanna watch today?'
         className='movie-search'
         onChange={({target}) => search(target.value)}> </input>
         <div className='movie-container'></div>
       </div>
      </header>
    </div>
  );
}

export default App;
