import React from 'react'
import './feed.css'
import Share from '../../components/share/Share.jsx';
import Post from '../../components/Post/Post.jsx';
import {Posts} from '../../Dummydata';
const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed-wrapper'>
        <Share/>
        {Posts.map((p)=>(
         <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feed
