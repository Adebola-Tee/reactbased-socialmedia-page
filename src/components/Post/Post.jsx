import './post.css';
import {MoreVert} from '@mui/icons-material';
import {Users} from "../../Dummydata"
import { useState } from 'react';

const Post = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = ()=>{
   setLike(isLiked ? like-1 : like+1)
   setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className='post--wrapper'>
        <div className='post--top'>
          <div className='post--top-left'>
          <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} className='post--profilepicture' alt='post-profile-image'/>
            <p className='post-top-username'>{Users.filter(u=>u.id === post.userId)[0].username}</p>
            <span>{post.date}</span>
          </div>
          <MoreVert/>
        </div>
        <div className='post--center'>
          <span className='post-center-text'>{post?.description}</span>
          <img src={post.postPicture} className='post--center--picture' alt='post-center-image'/>
        </div>
        <div className='post--bottom'>
          <div className='post--bottom-left'>
          <img src='./assets/like.png' className='bottom--like--picture' onClick={likeHandler} alt='post-like-image'/>
          <img src='./assets/heart.jpeg' className='bottom--heart--picture' onClick={likeHandler} alt='post-heart-image'/>
          <span>{like} people like it</span>
          </div>
          <div className='post--bottom-right'>
            <span className='post-bottom-comment'>{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
