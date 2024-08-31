import React from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate=useNavigate();

 const Submit=(event)=>{
  event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    if(email===''){
      alert('Must Fill All Fields')
      return false;
    }else if( password===''){
      alert('Must Fill All Fields')
      return false;
    }
    else{
        nextPage();
    }
 }

 const nextPage=()=>{
    navigate('/employee')

 }
  return (
    <section>
      <div className="container " style={{margin:"0px",padding:"0px"}}>
        <div className="row" style={{backgroundColor:"white"}}>
          <div className="col-6 login_page_content ">
            <h1 className='login'>Login</h1>
            <form onSubmit={Submit}>
              <div>
                <input id='email' className='input_box' type='text' placeholder="Employee Id" />
              </div>
              <div>
                <input id='password' className='input_box' type='password' placeholder="Password" />
              </div>
              <p className="forgotpassword">Forgot Password?</p>
              <div>
              <button className='login_button' type="submit">Login</button>
              <button className='cancel_button' type='button' onClick={()=>{
                window.location.reload();
              }}>Cancel</button>
              </div>
              
            </form>
  
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
