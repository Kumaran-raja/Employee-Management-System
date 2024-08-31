import React, { useState } from 'react'
import './Employee.css'
import { IoLogoApple } from "react-icons/io";
import Profile from './profilePage'
import Task from './Task'
import Attendance from './Attendance'
import Report from './ReportAnalysis'
import Notification from './Notifications'
function Employee() {
    const [page,setPage]=useState('profile')
    const handlePageShow=(pageName)=>{
        setPage(pageName)
    }
  return (
        <div className='employee_grid'>
            <div className='nav'>
            <IoLogoApple className='company_logo'/>
                <p onClick={()=>{
                    handlePageShow('profile')
                }} className='nav_item'>Profile</p>
                <p onClick={()=>{
                    handlePageShow('attendence')
                }} className='nav_item'>Attendance</p>
                <p onClick={()=>{
                    handlePageShow('task')
                }} className='nav_item'>Task</p>
         
                <p onClick={()=>{
                    handlePageShow('report')
                }} className='nav_item'>Report Analysis</p>
                <p onClick={()=>{
                    handlePageShow('notification')
                }} className='nav_item'>Notification & System Alert</p>
            </div>
            <div className='main_content'>
               <div className='show'>
                    {page==='profile' && <Profile/>}
                    {page==='attendence' && <Attendance/>}
                    {page==='task' && <Task/>}
                    {page==='report' && <Report/>}
                    {page==='notification' && <Notification/>}
               </div>
            </div>
        </div>
  )
}

export default Employee