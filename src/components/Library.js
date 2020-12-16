import React from "react"
import LibrarySong from "./LibrarySong"

export default function Library({
  libraryStatus,
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            id={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  )
}
