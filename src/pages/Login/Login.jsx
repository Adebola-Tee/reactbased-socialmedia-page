import './login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <div className='login-left'>
            <h3 className='socialmedia-name'>SocialSphere</h3>
            <span className='socialmedia-description'>Step into a World of Connection: Welcome to SocialSphere!</span>
        </div>
        <div className='login-right'>
            <form className='login-form'>
                <h2>Login</h2>
                <input type="text" placeholder="Email" className='login-input'/>
                <input type="password" placeholder="Password" className='login-input'/>
                <button type="submit" className='login-submitbtn'>Log In</button>
                <span className='login-fg-psw'>Forgot password</span>
                <button className="create-account-btn">Create a new account</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
