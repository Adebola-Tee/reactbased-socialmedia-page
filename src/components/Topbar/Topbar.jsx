import React from "react"
import "./topbar.css"
import {Search, Person, Chat, Notifications} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar--container">
         <div className="topbar--left">
           <span className="social--logo">SocialSphere</span>
         </div>
         <div className="topbar--center">
           <div className="Search--container">
             <Search className="search--logo"/>
             <input type="text" className="search--input" placeholder="search for posts, images, videos or friends"/>
           </div>
         </div>
         <div className="topbar--right">
           <div className="class-links">
              <span className="class-links-items"><a href="#">Homepage</a></span>
              <span className="class-links-items"><a href="#">Timeline</a></span>
           </div>
           <div className="top-icons">
             <div className="topicons-items">
               < Chat/>
               <span className="topicons-number">1</span>
             </div>
             <div className="topicons-items">
               < Notifications/>
               <span className="topicons-number">1</span>
             </div>
             <div className="topicons-items">
               < Person/>
               <span className="topicons-number">1</span>
             </div>
           </div>
           <img src="./assets/Person/1.jpeg.jpg" className="profile-img"/>
         </div>
      </div>
    </div>
  )
}

export default Topbar
