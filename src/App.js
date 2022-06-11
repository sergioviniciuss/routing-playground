import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { User } from './pages/Users/User';
import { Layout } from './components/Layout';
import { NoMatch } from './pages/NoMatch';
import { users as usersList } from './mocks/users';

export const App = () => {
  const [users, setUsers] = useState(usersList);
  const navigate = useNavigate();
  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate('/users');
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>

  );
};