import './register.css'

const Register = () => {
  return (
    <div className='login-container'>
    <div className='login-wrapper'>
      <div className='login-left'>
          <h3 className='socialmedia-name'>SocialSphere</h3>
          <span className='socialmedia-description'>Step into a World of Connection: Welcome to SocialSphere!</span>
      </div>
      <div className='login-right'>
          <form className='login-form'>
              <h2>Sign Up</h2>
              <input type="text" placeholder="Email" className='login-input'/>
              <input type="password" placeholder="Password" className='login-input'/>
              <input type="password" placeholder="Password Again" className='login-input'/>
              <button type="submit" className='login-submitbtn'>Sign Up</button>
              <button className="create-account-btn">Log In</button>
          </form>
      </div>
    </div>
  </div>
)
}

export default Register
