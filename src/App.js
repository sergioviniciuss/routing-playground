import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { User } from './pages/Users/User';
import { Layout } from './components/Layout';
import { NoMatch } from './pages/NoMatch';
import { users } from './mocks/users';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route path=":userId" element={<User />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>

  );
};