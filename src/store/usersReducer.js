import * as types from '../store/action-types';

const initialState = {
   isLoaded: false,
   users: [],
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.SET_USERS:
         return { ...state, isLoaded: true, users: [...action.payload.users] };

      case types.SET_USERS_ERROR:
         console.log(action.payload.err);
         return { ...state };

      case types.DELETE_USERS:
         return { ...state, isLoaded: true, users: [...action.payload.users] };

      case types.DELETE_USERS_ERROR:
         console.log(action.payload.err);
         return { ...state };

      case types.NEW_USER:
         return { ...state, isLoaded: true, users: [...action.payload.users] };

      case types.NEW_USER_ERROR:
         console.log(action.payload.err);
         return { ...state };

      case types.CHANGE_USER_DATA:
         console.log(action.payload.users);
         return { ...state, isLoaded: true, users: [...action.payload.users] };

      case types.CHANGE_USER_DATA_ERROR:
         console.log(action.payload.err);
         return { ...state };

      default:
         return { ...state };
   }
};

export default usersReducer;
