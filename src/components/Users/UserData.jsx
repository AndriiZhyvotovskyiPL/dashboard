import React, { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import UserEditData from './UserEditData';

const UserData = ({ user, deleteUser, changeUserData }) => {
   const [updateData, setUpdateData] = useState({
      id: user.id,
      name: user.name,
      username: user.username,
      city: user.address.city,
      email: user.email,
   });

   const [Modal, open, close] = useModal('root', {});

   const handleChange = (e) => {
      setUpdateData((prevState) => {
         return {
            ...prevState,
            [e.target.id]: e.target.value,
         };
      });
   };

   const [edit, setEdit] = useState(false);

   const onDelete = () => {
      deleteUser(user.id);
   };

   const onSubmit = () => {
      changeUserData(user.id, updateData);
      setEdit(false);
   };

   return (
      <>
         {edit ? (
            <UserEditData
               edit={edit}
               onDelete={onDelete}
               onSubmit={onSubmit}
               setEdit={setEdit}
               updateData={updateData}
               handleChange={handleChange}
               open={open}
            />
         ) : (
            <tr id="usersList">
               <td className="idCol">{user.id}</td>
               <td className="nameCol">{user.name}</td>
               <td className="usernameCol">{user.username}</td>
               <td className="cityCol">{user.address.city}</td>
               <td className="emailCol">{user.email}</td>
               <td>
                  {edit ? (
                     <button className="submitBtn" onClick={onSubmit}>
                        submit
                     </button>
                  ) : (
                     <button onClick={() => setEdit(!edit)} id="editBtn">
                        edit
                     </button>
                  )}
               </td>
               <td>
                  <button onClick={open} className="deleteBtn">
                     delete
                  </button>
               </td>
            </tr>
         )}
         <Modal>
            <div id="modal">
               <div>Delete</div>
               <hr />
               <p>Are you sure you want to delete the user {user.name}</p>
               <hr />
               <div id="modalBtn">
                  <button onClick={close}>cancel</button>
                  <button onClick={onDelete} className="deleteBtn">
                     delete
                  </button>
               </div>
            </div>
         </Modal>
      </>
   );
};

export default UserData;
