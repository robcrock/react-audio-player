import React from "react"
import LibrarySong from "./LibrarySong"

export default function Library({
  audioRef,
  songs,
  setCurrentSong,
  isPlaying,
}) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  )
}
