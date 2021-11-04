import React from 'react'

function Settings() {
    return (
        <div>
            <table>
         
         <tbody>
           <tr class="table-settings">
             <td><i class="fas fa-bell "></i></td>
             <td><p> <a href="#"> Enable Push Notification</a></p></td>
             <td>
               <label class="switch">
               <input type="checkbox" checked />
               <span class="slider round"></span>
             </label>
           </td>
           </tr>
           <tr class="table-settings">
             <td> <i class="fas fa-cog "></i></td>
             <td><p><a href="#"> Themes</a></p></td>
           </tr>
           <tr class="table-settings">
             <td><i class="fas fa-user"></i></td>
             <td><p><a href="#"> Update Profile</a></p></td>
           </tr>
           <tr class="table-settings">
             <td><i class="fas fa-key "></i></td>
             <td><p><a href="#">Change Password</a></p></td>
           </tr>
           
          
           
         </tbody>
       </table>
        </div>
    )
}

export default Settings
