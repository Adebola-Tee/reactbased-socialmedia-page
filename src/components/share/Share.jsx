import React from 'react'
import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"
const Share = () => {
  return (
    <div className='share'>
      <div className='share--wrapper'>
        <div className='share--top'>
          <img src='./assets/Person/1.jpeg.jpg' className='share--profilepicture' alt='share-profile-image'/>
          <input placeholder='What is on your mind Tee?' className='share--input'/>
        </div>
        <hr className='share--hr'/>
        <div className='share--bottom'>
          <div className='share--options'>
            <div className='share--option'>
              <PermMedia htmlColor='tomato' className='share--icon'/>
              <span className='shareoption--text'>Photos or Videos</span>
            </div>
            <div className='share--option'>
              <Label htmlColor='blue' className='share--icon'/>
              <span className='shareoption--text'>Tag</span>
            </div>
            <div className='share--option'>
              <Room htmlColor='green' className='share--icon'/>
              <span className='shareoption--text'>Location</span>
            </div>
            <div className='share--option'>
              <EmojiEmotions htmlColor='goldenrod' className='share--icon'/>
              <span className='shareoption--text'>Feelings</span>
            </div>
          </div>
          <button className='share-button'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
