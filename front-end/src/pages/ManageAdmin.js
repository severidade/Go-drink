import { useEffect, useState } from 'react';
import AdminRegisterUser from '../components/AdminRegisterUser/AdminRegisterUser';
import NavBar from '../components/NavBar/NavBar';
import UserDetails from '../components/UserDetails/UserDetails';
import UserDetailsHeader from '../components/UserDetailsHeader/UserDetailsHeader';
import userRequest from '../services/requests/userRequest';

function ManageAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userRequest.getAllUsers()
      .then((response) => setUsers(response.body));
  }, []);

  async function handleFilterUsers(userId) {
    await userRequest.deleteUser(userId);
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
  }

  return (
    <div>
      <NavBar
        orders="gerenciar usuários"
        selected="orders"
      />

      <AdminRegisterUser />
      <div>
        <UserDetailsHeader />
        {users.map((user, index) => (
          <UserDetails
            key={ user.id }
            email={ user.email }
            itemNumber={ index + 1 }
            role={ user.role }
            userName={ user.name }
            removeItem={ () => handleFilterUsers(user.id) }
          />
        ))}
      </div>
    </div>
  );
}

export default ManageAdmin;
