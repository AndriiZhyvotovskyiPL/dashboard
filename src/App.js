import './App.css';
import { Routes, Route } from 'react-router';
import Dashboard from './components/Dashboard/Dashboard';
import { useEffect } from 'react';
import { addUser, changeUserData, deleteUser, setUsers } from './store/usersAction';
import { connect } from 'react-redux';

function App({ setUsers, users, deleteUser, addUser, changeUserData }) {
   useEffect(() => {
      fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
         .then((response) => response.json())
         .then((users) => setUsers(users));
   }, []);
   return (
      <div className="appWrapper">
         <Routes>
            <Route
               path={'/'}
               element={
                  <Dashboard
                     users={users.users}
                     deleteUser={deleteUser}
                     addUser={addUser}
                     changeUserData={changeUserData}
                  />
               }
            />
         </Routes>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      users: state.users,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      setUsers: (users) => dispatch(setUsers(users)),
      deleteUser: (id) => dispatch(deleteUser(id)),
      addUser: (userData) => dispatch(addUser(userData)),
      changeUserData: (id, userData) => dispatch(changeUserData(id, userData)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
