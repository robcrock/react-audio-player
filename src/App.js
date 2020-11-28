import { useState } from "react"
// Adding components
import Song from "./components/Song"
import Player from "./components/Player"
// Adding styles
import "./styles/app.css"
// Import Util
import data from "./utils"

function App() {
  // State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </>
  )
}

export default App
