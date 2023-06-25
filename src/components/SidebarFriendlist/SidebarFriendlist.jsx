import React from 'react'
import './sidebarFriendlist.css'
const SidebarFriendlist = ({user}) => {
  return (
    <div>
      <li className='sidebar-friends'>
        <img src={user.profilePicture} className='sidebar-img'/>
        <span>{user.username}</span>
      </li>
    </div>
  )
}

export default SidebarFriendlist
