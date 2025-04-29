import { CardComponent } from './Components/Card';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material'
import { ButtonComponent } from './Components/Button';

function App() {

  const [user, setUser] = useState({id: 1, name: "User"});
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentEditUser, setCurrentEditUser] = useState({id: 1, name: "User"});

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
      console.log(users);
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) localStorage.setItem('users', JSON.stringify(users));
    const savedUsers = localStorage.getItem('users');
    console.log(savedUsers);
  }, [users]);

  const handleAddUser = () => {
    if (!edit) {
      setUsers(prev => [...prev, user]);
    } else {
      setUsers(prev => 
        prev.map(prev_user => prev_user.id === currentEditUser.id ? user : prev_user)
      );
      setEdit(false);
    }
  }

  const handleUser = (type, _user) => {
    if (type === "Remove") {
      setUsers(users.filter(user => user.id !== _user.id));
    }
    if (type === "Edit") {
      setCurrentEditUser(_user);
      setEdit(true);
    }
  }

  return (
    <div className="App" align="center">
      <>
        <TextField 
          id="outlined-basic" 
          label="User" 
          variant="outlined" 
          onChange={(event) => {
            setUser(
              { id: Math.random(), name: event.target.value }
            );
        }
        }
          />
        <ButtonComponent type="Add" handleUser={handleAddUser}/>
        
        <CardComponent handleUser={handleUser} users={users}/>
      </>
    </div>
  );
}

export default App;
