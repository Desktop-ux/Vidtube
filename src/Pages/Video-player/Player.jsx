import React from 'react'
import "./player.css"
import VideoPlay from '../../Components/Video-play/VideoPlay'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {videoId, categoryId} = useParams()

  return (
    <div className='play-container' >
     <VideoPlay videoId = {videoId}  />
     <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Player