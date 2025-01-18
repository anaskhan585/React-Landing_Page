import React from 'react'

const Nav = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Logo' /> 
        </div>
        <div className="lists">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </div>
        <div className="btn1">
            <button>Login</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
