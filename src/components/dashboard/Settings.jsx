import React from 'react'
import TopNav from './layouts/TopNav'
import Settingcss from '../styles/settings.module.css';


function Settings() {
    return (
      <div className={Settingcss.main}>
        <TopNav name={Settingcss.Settings} />
        <div className={Settingcss.mainContent}>
          <table>
         
         <tbody>
           <tr className={Settingcss.tableSettings} >
             <td><i className="fas fa-bell "></i></td>
             <td><p> <a href="/"> Enable Push Notification</a></p></td>
             <td>
               <label className="switch">
               <input type="checkbox" />
               <span className="slider round"></span>
             </label>
           </td>
           </tr>
           <tr className="table-settings">
             <td> <i className="fas fa-cog "></i></td>
             <td><p><a href="/"> Themes</a></p></td>
           </tr>
           <tr className="table-settings">
             <td><i className="fas fa-user"></i></td>
             <td><p><a href="/"> Update Profile</a></p></td>
           </tr>
           <tr className="table-settings">
             <td><i className="fas fa-key "></i></td>
             <td><p><a href="/">Change Password</a></p></td>
           </tr>
           
          
           
         </tbody>
          </table>
        </div>
      </div>
    )
}

export default Settings
