import React from 'react'
import './Header.css'
function Header() {
  function entervalue(){
    let t=3;
     t=t+5;
    console.log("value",t);
  }
  return (
    <div className='navbar'>

      <div className='header'>
        <h1 id='main'>Responsive</h1>
      </div>
      <div className='btn'>
        <div className='btn1'>
          <h1>
            <a href='/home'>Home</a> |</h1>
        </div>
        <div className='btn1'>
          <h1>
            <a href='/login'> Dashboard</a> |</h1>
        </div>
        <div className='btn1'>
          <h1>
            <a href='/signup'> About Us</a> |</h1>
        </div>
      </div>
      <div className='btn2'>
        <input type='submit' onClick={entervalue} value='Submit'/>
      </div>
    </div>
  )
}

export default Header;