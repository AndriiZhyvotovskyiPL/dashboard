const UserEditData = ({ edit, onSubmit, setEdit, updateData, handleChange, open }) => {
   return (
      <tr id="editInput">
         <td className="idCol">
            <input id="id" type="number" style={{ width: '5rem' }} value={updateData.id} onChange={handleChange} />
         </td>
         <td>
            <input
               id="name"
               type="text"
               style={{ width: 'max-content' }}
               value={updateData.name}
               onChange={handleChange}
            />
         </td>
         <td>
            <input id="username" type="text" value={updateData.username} onChange={handleChange} />
         </td>
         <td>
            <input id="city" type="text" value={updateData.city} onChange={handleChange} />
         </td>
         <td>
            <input id="email" type="text" value={updateData.email} onChange={handleChange} />
         </td>

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
   );
};

export default UserEditData;
