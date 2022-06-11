import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>

  );
};