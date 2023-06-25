import React from 'react'
import Topbar from '../../components/Topbar/Topbar.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Rightbar from '../../components/Rightbar/Rightbar.jsx';
import Feed from '../../components/Feed/Feed.jsx';
import './home.css'

const Home = () => {
  return (
    <>
    <Topbar/>
    <div className='Home--container'>
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}

export default Home
