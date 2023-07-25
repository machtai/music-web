import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import Player from './components/Player';
import { useState } from 'react';
function App() {

  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {

    const song = DataSongs.find(song => song.id === idSong)

    !song ? setSong(DataSongs[0]) : setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden '>
          <Details />
          <ListSongs />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
