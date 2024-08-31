import React from 'react'
import './Attendance.css'
function Attendance() {

  const Submit=(e)=>{
    e.preventDefault();
    const dateValue=document.getElementById('date').value;
    const timeValue=document.getElementById('time').value;
    const formValue=document.getElementById('formLink').value;
    const CommentValue=document.getElementById('comment').value;
    if(dateValue==='' || timeValue==='' || formValue===''||CommentValue===''){
      alert("Enter All field")
    }
    else{
      alert("Attendance Submit Successfully...")
    }
  }
  return (
    <div>
      <h1 style={{padding:"20px",marginTop:"20px"}}>Attendance</h1>
      <form onSubmit={Submit}>
       <div className='attendance_data_grid'>
          <p className='attendance_details'>Date</p>
          <input id='date' type='date' className='attendance_input' placeholder='date'/>
        </div>
        <div className='attendance_data_grid'>
          <p className='attendance_details'>Time</p>
          <input id='time' type='time' className='attendance_input' placeholder='date'/>
        </div>
        <div className='attendance_data_grid'>
          <p className='attendance_details'>Form</p>
          <input id='formLink' type='text' className='attendance_input' placeholder='Form Link'/>
        </div>
        <div className='attendance_data_grid'>
          <p className='attendance_details'>Comment</p>
          <input id='comment' type='text' className='attendance_input' placeholder='Comment'/>
        </div>
        <button type='submit' className='Attendance_Submit_button'>Submit</button>
        </form>
    </div>
  )
}

export default Attendance