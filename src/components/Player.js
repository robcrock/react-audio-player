import { useRef, useState } from "react"
// Import Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons"

export default function Player({ currentSong, isPlaying, setIsPlaying }) {
  // Ref
  const audioRef = useRef(null)

  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime, duration })
  }
  const getTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = ("0" + Math.floor(time % 60)).slice(-2)
    return `${minutes}:${seconds}`
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPlay : faPause}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  )
}
