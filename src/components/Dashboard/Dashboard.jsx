import '../../App.css';
import React, { useState } from 'react';
import NewUser from '../Users/NewUser';
import UserData from '../Users/UserData';

const Dashboard = ({ users, deleteUser, addUser, changeUserData }) => {
   const [edit, setEdit] = useState(false);

   return (
      <div>
         <div id="dash">Dashboard</div>
         {edit ? (
            <NewUser setEdit={setEdit} addUser={addUser} />
         ) : (
            <div className="form">
               <div className="heading">
                  <span>user list</span>
                  <span>
                     <button onClick={() => setEdit(!edit)} id="newUserBtn">
                        add new
                     </button>
                  </span>
               </div>
               <hr color="black" size="1" style={{ marginLeft: -26, marginRight: -26 }} />
               <table>
                  <thead>
                     <tr>
                        <td className="idCol">id</td>
                        <td>name</td>
                        <td>username</td>
                        <td>city</td>
                        <td>email</td>
                        <td>edit</td>
                        <td>delete</td>
                     </tr>
                  </thead>
                  {users.length > 0 &&
                     users.map((user) => (
                        <tbody key={user.id}>
                           <UserData user={user} deleteUser={deleteUser} changeUserData={changeUserData} />
                        </tbody>
                     ))}
               </table>
               {!users.length && (
                  <div id="noUsers" style={{ display: 'flex', justifyContent: 'center' }}>
                     Unfortunately there are no users.
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

export default Dashboard;
