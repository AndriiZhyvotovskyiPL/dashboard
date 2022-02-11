import '../../App.css';
import { useForm } from 'react-hook-form';

const NewUser = ({ setEdit, addUser }) => {
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({ mode: 'onBlur' });

   const onSubmit = (data) => {
      addUser(data);
      reset();
      setEdit(false);
   };
   return (
      <div className="form">
         <div className="heading">
            <span>form</span>
         </div>
         <hr color="black" size="1" style={{ marginLeft: -26, marginRight: -26 }} />
         <form onSubmit={handleSubmit(onSubmit)} id="newUser">
            <div>
               <label id="name">
                  Name:{' '}
                  <input
                     type="text"
                     {...register('name', { required: 'Name is required' })}
                     className={errors?.name && 'errorInput'}
                  />
               </label>
               <div className="error">{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}</div>
            </div>
            <div>
               <label>
                  Email:{' '}
                  <input
                     type="text"
                     {...register('email', { required: 'Email is required' })}
                     className={errors?.email && 'errorInput'}
                  />
               </label>
               <div className="error">{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
            </div>
            <div id="submit">
               <button onClick={() => setEdit(false)} id="cancelBtn">
                  cancel
               </button>
               <button type="submit" className="submitBtn">
                  submit
               </button>
            </div>
         </form>
      </div>
   );
};

export default NewUser;
