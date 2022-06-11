import { Link, Outlet } from "react-router-dom";

export const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.fullName}
            </Link>
          </li>
        ))}
        <Outlet />
      </ul>
    </>
  );
};