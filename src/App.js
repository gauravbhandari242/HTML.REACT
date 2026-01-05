import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='vib'>
< div className='text'>SIGN_up</div>
<div className='underline'></div>
  </div>
     < div className='nev'>-

      <div className='a1'>
      <input type='text ' text="name"placeholder='Name'></input>
           </div>
        
        <div className='a2'>
        <input type='Email'   text=' email'placeholder='Email'></input>
        </div>
        
        <div className ='a3'>
        <input type='Password'   text='password'  placeholder='Password'></input>
          </div>
<div className='forgot-password'>lost password? <span><a href='//click here//'>click here</a></span></div>
<div className='submit-container'>
  <div className='submit'><button><a href='//sign up//'></a>sign up</button></div>
  <div className='sumit'><button>login</button></div>
  </div>
    </div>
    </div>
  );
}

export default App;
