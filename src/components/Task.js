import {useState} from 'react'
import './Task.css'
function Task() {
    const[task,setTask]=useState([])
    const Submit=(e)=>{
        e.preventDefault();
        const dateValue=document.getElementById('date').value;
        const descriptionValue=document.getElementById('description').value;
        if(dateValue==='' || descriptionValue===''){
            alert("Must Enter All Field")
        }
        else{
            setTask((curr)=>[...curr,{date:dateValue,description:descriptionValue}])
        }
    }
  return (
    <div>
        <h1 style={{ marginLeft:"10px" ,padding:"10px"}}>Daily Task</h1>
        <form onSubmit={Submit}> 
            <div className='task_grid'>
                <p className='task_title'>Date</p>
                <input id='date' className='task_input' type='date' />
            </div>
            <div className='task_grid'>
                <p className='task_title'>Description</p>
                <textarea id='description' className='task_input' type='text' placeholder='Description'/>
            </div>
            <button className='task_completed' type='submit'>Completed</button>
            <button className='task_cancel' type='button' onClick={()=>{
               const dateValue=document.getElementById('date').value;
               const descriptionValue=document.getElementById('description').value;
                if(dateValue!=='' || descriptionValue!==''){
                    alert("cancel Task")
                }
                
                document.getElementById('date').value='';
                document.getElementById('description').value='';
            }}>Cancel</button>
        </form>
        <div className='task_grid'>
                <p className='task_history_title'>Date</p>
                <p className='task_history_title '>Description</p>
            </div>
        <div className='task_history'>
        {
            task.map((data,index)=>(
            <div className='task_history_grid' key={index}>
                <p className='task_history_date'>{data.date}</p>
                <p className='task_history_data'>{data.description}</p>
            </div>
            ))
        }
       
        </div>
       
    </div>
  )
}

export default Task