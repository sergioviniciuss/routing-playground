import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Layout } from './components/Layout';
import { NoMatch } from './pages/NoMatch';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>

  );
};