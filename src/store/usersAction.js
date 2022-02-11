import * as types from '../store/action-types';

export const setUsers = (users) => {
   return (dispatch) => {
      try {
         dispatch({ type: types.SET_USERS, payload: { users } });
      } catch (err) {
         dispatch({ type: types.SET_USERS_ERROR, payload: { err } });
      }
   };
};

export const deleteUser = (id) => {
   return (dispatch, getState) => {
      const users = getState().users.users;
      for (let i = 0; i < users.length; i++) {
         if (users[i].id === id) {
            users.splice(i, 1);
         }
      }

      try {
         dispatch({ type: types.DELETE_USERS, payload: { users } });
      } catch (err) {
         dispatch({ type: types.DELETE_USERS_ERROR, payload: { err } });
      }
   };
};

export const addUser = (userData) => {
   return (dispatch, getState) => {
      const users = getState().users.users;
      const newUser = {
         ...userData,
         address: { city: 'Vancouver' },
         username: userData.name,
         id: users[users.length - 1].id + 1,
      };
      users.push(newUser);

      try {
         dispatch({ type: types.NEW_USER, payload: { users } });
      } catch (err) {
         dispatch({ type: types.NEW_USER_ERROR, payload: { err } });
      }
   };
};

export const changeUserData = (id, userData) => {
   return (dispatch, getState) => {
      const users = getState().users.users;
      console.log('here');
      for (let i = 0; i < users.length; i++) {
         if (users[i].id === id) {
            console.log('if');
            users[i] = {
               id: userData.id,
               name: userData.name,
               username: userData.username,
               email: userData.email,
               address: { ...users[i].address, city: userData.city },
               company: users[i].company,
               phone: users[i].phone,
               website: users[i].website,
            };
         }
      }
      try {
         dispatch({ type: types.CHANGE_USER_DATA, payload: { users } });
      } catch (err) {
         dispatch({ type: types.CHANGE_USER_DATA_ERROR, payload: { err } });
      }
   };
};
