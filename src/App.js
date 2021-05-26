import './App.css';
import React, {useState} from 'react'; 
import SearchForm from './components/SearchForm';
import GifList from './components/GifList'

function App() {

  const [gifs, setGifs] = useState([])
  
  const fetchData = async (term) => {
    let APIurl = "http://api.giphy.com/v1/gifs/search";
    let APIKey = "g4PZMbDnfMsCegCjFQTZZCwhaH3q4RKE"
    let url = APIurl + `?q=${term}&api_key=${APIKey}&limit=25`
    await fetch(url)
      .then(response => response.json())
      .then(results => {
        setGifs(results.data)
        console.log(results.data)
        console.log('url', url)
      })
  }

  // useEffect(() => {
  //  fetchData('friends')
  // }, [])

  const onSearchSubmit = (term) => {
    console.log('term' + term)
    fetchData(term)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SearchGIF</h1>
      </header>
      <SearchForm onSubmit={onSearchSubmit}/>
      <GifList gifs={gifs}/>
    </div>
  );
}

export default App;
