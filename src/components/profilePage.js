import React, { useState } from 'react'
import './Login.css'
function ProfilePage() {
    const[user,setUser]=useState(null);
    // {Name:'',empID:'',dob:'',doj:'',roll:'',file:''}
    const Submit=(e)=>{
        e.preventDefault();
        const nameValue=document.getElementById('name').value;
        const dobValue=document.getElementById('dob').value;
        const fileValue=document.getElementById('file').value;
        if(nameValue==='' ||  dobValue===''||fileValue===''){
          alert("Enter All field")
        }
        else{
            setUser({Name:nameValue,dob:dobValue,file:fileValue})
            alert("Profile updated Successfully...")
        }
    }
 
  return (
    <div>
        {
            user? (
                <p className='welcome_msg'>Welcome <span style={{color:"red",fontWeight:"bold"}}>{user.Name}</span></p>
            ):(
                <p className='welcome_msg'>Welcome</p>
            )
        }
        <div>
            <h1 style={{paddingLeft:"40px",margin:"0px" ,marginTop:"20px"}}>Profile</h1>
            <form onSubmit={Submit}>
                <div className='profile_data_grid'>
                    <p className='employee_details'>Name</p>
                    <input id='name' type='text' className='employee_input' placeholder='Name'/>
                </div>
                <div className='profile_data_grid'>
                    <p className='employee_details'>Employee ID</p>
                    <input  id='empID' type='number' className='employee_input' placeholder='Employee_id' disabled/>
                </div>
                <div className='profile_data_grid'>
                    <p className='employee_details'>DOB</p>
                    <input id='dob' type='date' className='employee_input' placeholder='DOB' />
                </div>
                <div className='profile_data_grid'>
                    <p className='employee_details'>DOJ</p>
                    <input id='doj' type='date' className='employee_input' placeholder='DOJ' disabled/>
                </div>
                <div className='profile_data_grid'>
                    <p className='employee_details'>Roll</p>
                    <input id='roll' type='text' className='employee_input' placeholder='Roll' disabled/>
                </div>
                <div className='profile_data_grid'>
                    <p className='employee_details'>Resume</p>
                    <input id='file' type='file' className='employee_input' placeholder='Choose Resume'/>
                </div>
                <button className='profile_update_button' type='submit'>Update</button>
                <button className='profile_cancel_button' type='button' onClick={()=>window.location.reload()}>Cancel</button>
            </form>
        </div>
    </div>
  )
}

export default ProfilePage