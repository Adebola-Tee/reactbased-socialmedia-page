import React from 'react';
import './rightbar.css';
import Onlinefriends from '../onlinefriends/Onlinefriends';
import {Users} from '../../Dummydata'

const Rightbar = ({profile}) => {
  const Homerightbar = ()=>{
    return(<>
    <div className='rightbar-birthday-notification'>
          <img src='./assets/gift.jpeg' className='rightbar-birthday-gift' alt='gift-image'/>
          <span><b>Megan Good</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img img src='./assets/image-ad.jpg' className='rightbar-ad' alt='family-gathering'/>
        <h4 className='rightbar-online-friends'>Online friends</h4>
        <ul className='onlinefriend-profile-unordered-list'>
        {Users.map((u)=>(
          <Onlinefriends key={u.id} user={u}/>
        ))}
        </ul>
    </>
    )
  }
  const Profilerightbar = ()=>{
    return(<>
        <div className='profilerightbar'>
          <h4 className='profile-title'>User Information</h4>
          <div className='profile-info'>
           <div className='profile-info-items'>
              <span className='profile-info-item1'>From:</span>
              <span className='profile-info-item2'>Sweden</span>
            </div>
            <div className='profile-info-items'>
              <span className='profile-info-item1'>City:</span>
              <span className='profile-info-item2'>Gothenburg</span>
            </div>
            <div className='profile-info-items'>
              <span className='profile-info-item1'>Relationship status:</span>
              <span className='profile-info-item2'>Married</span>
            </div>
          </div>  
          <h4 className='user-friends'>User's friends</h4>
          <div className='userfriend'>
            <div className='userfriend-info'>
              <img src='assets/Person/2.jpeg.jpg' className='user-friend-img' alt='round-img'/>
              <span className='userfriend-name'>Bran David</span>
            </div>  
            <div className='userfriend-info'>
              <img src='assets/Person/3.jpeg.jpg' className='user-friend-img' alt='round-img'/>
              <span className='userfriend-name'>Mimi Noel</span>
            </div>  
            <div className='userfriend-info'>
              <img src='assets/Person/10.jpeg.jpg' className='user-friend-img' alt='round-img'/>
              <span className='userfriend-name'>Amara Loveth</span>
            </div>  
            <div className='userfriend-info'> 
              <img src='assets/Person/5.jpeg.jpg' className='user-friend-img' alt='round-img'/>
              <span className='userfriend-name'>Eddie Muse</span>
            </div>
            <div className='userfriend-info'>
              <img src='assets/Person/6.jpeg.jpg' className='user-friend-img' alt='round-img'/>
              <span className='userfriend-name'>Nelly Booth</span>
            </div>  
          </div>
        </div>
    </>
    )
     }
  return (
    <div className="right--bar">
      <div className='rightbar-wrapper'>
        {profile ? <Profilerightbar/> : <Homerightbar/>}
      </div>
    </div>
  )
}

export default Rightbar
