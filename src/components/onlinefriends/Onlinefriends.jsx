import React from 'react'
import './onlinefriends.css'
const Onlinefriends = ({user}) => {
  return (
    <div>
      <li className='onlinefriend-profile-list'>
            <div className='onlinefriend-profile-listnames'>
            <img src={user.profilePicture} className='rightbar-onlinefriend-img' alt=''/>
            <span className='rightbar-online-indicator'></span>
            </div>
            <span className='rightbar-onlinefriend-name'>{user.username}</span>
          </li>
    </div>
  )
}

export default Onlinefriends
