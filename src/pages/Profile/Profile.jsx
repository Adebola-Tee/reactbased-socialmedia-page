import React from 'react'
import Topbar from '../../components/Topbar/Topbar.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Feed from '../../components/Feed/Feed.jsx';
import Rightbar from '../../components/Rightbar/Rightbar.jsx';
import './profile.css'
const Profile = () => {
  return (
    <div>
       <div className='profile'>
           <div className='profile--wrapper'>
               <Topbar/>
                <div className='sideright--bar'>
                   <Sidebar/>
                    <div className='profile--rightbar'>
                        <div className='profilerightbar--top'>
                            <div className='profileCover'>
                                <img src='assets/posts/profilecover-img.jpg' className='profile--cover--img'/>
                                <img src='assets/Person/1.jpeg.jpg' className='profile--user--img'/>
                            </div>
                            <div className='profile-info'>
                                <h4 className='profile-info-name'>Tee Bola</h4>
                                <span className='profile-info-description'>Hej Buddies!</span>
                            </div>
                        </div>
                        <div className='profilerightbar--bottom'>
                          <Feed/>
                          <Rightbar profile/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
