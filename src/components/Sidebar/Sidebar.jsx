import React from 'react'
import './sidebar.css';
import{RssFeed, Chat, VideoCall, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from "@mui/icons-material";
import { Users } from '../../Dummydata';
import SidebarFriendlist from '../SidebarFriendlist/SidebarFriendlist';
export default function Sidebar() {
    return (
        <div className="side--bar">
          <div className='side-bar-wrapper'>
            <ul className='side-bar-list'>
             <li className='side-bar-listitems'>
               <RssFeed className='side-bar-logo'/>
               <span className='side-bar-logoname'>Feed</span>
             </li>
             <li className='side-bar-listitems'>
               <Chat className='side-bar-logo'/>
               <span className='side-bar-logoname'>Chats</span>
             </li>
             <li className='side-bar-listitems'>
               <VideoCall className='side-bar-logo'/>
               <span className='side-bar-logoname'>Videos</span>
             </li>
             <li className='side-bar-listitems'>
               <Group className='side-bar-logo'/>
               <span className='side-bar-logoname'>Groups</span>
             </li>
             <li className='side-bar-listitems'>
               <Bookmark className='side-bar-logo'/>
               <span className='side-bar-logoname'>Bookmarks</span>
             </li>
             <li className='side-bar-listitems'>
               <HelpOutline className='side-bar-logo'/>
               <span className='side-bar-logoname'>Questions</span>
             </li>
             <li className='side-bar-listitems'>
               <WorkOutline className='side-bar-logo'/>
               <span className='side-bar-logoname'>Jobs</span>
             </li>
             <li className='side-bar-listitems'>
               <Event className='side-bar-logo'/>
               <span className='side-bar-logoname'>Events</span>
             </li>
             <li className='side-bar-listitems'>
               <School className='side-bar-logo'/>
               <span className='side-bar-logoname'>Courses</span>
             </li>
            </ul>
            <button className='sidebar-btn'>Show More</button>
            <hr className='sidebar-hr'/>
            <ul className='sidebar-friendlist'>
              {Users.map((u)=>(
                <SidebarFriendlist key={u.id} user={u}/>
              ))}
            </ul>
          </div>
        </div>
      )
    
}
 
  

