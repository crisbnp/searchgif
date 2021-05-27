import './App.css';
import React, {useState} from 'react'; 
import SearchForm from './components/SearchForm';
import GifList from './components/GifList'

function App() {

  const [gifs, setGifs] = useState([])
  const [status, setStatus] = useState('idle');
  
  const fetchData = async (term) => {
    const APIurl = "http://api.giphy.com/v1/gifs/search";
    const APIKey = "g4PZMbDnfMsCegCjFQTZZCwhaH3q4RKE"
    let url = APIurl + `?q=${term}&api_key=${APIKey}&limit=27`
    await fetch(url)
      .then(response => response.json())
      .then(results => {
        setGifs(results.data)
        setStatus('resolved')
      })
  }

  const onSearchSubmit = (term) => {
    fetchData(term)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SearchGIF</h1>
      </header>
      <SearchForm onSubmit={onSearchSubmit}/>
      {status === 'loading' && <div>Loading</div>}
      {status === 'resolved' && <GifList gifs={gifs}/>}
      
    </div>
  );
}

export default App;
