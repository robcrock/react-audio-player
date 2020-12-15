export default function LibrarySong({
  audioRef,
  song,
  setCurrentSong,
  isPlaying,
}) {
  const songSelectHandler = () => {
    setCurrentSong(song)
    // check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
      audioRef.current.play()
    }
  }

  return (
    <div className="library-song" onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name + " album cover"}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}
