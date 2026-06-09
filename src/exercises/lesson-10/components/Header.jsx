import { NavLink } from 'react-router-dom';

export default function Header({ user }) {
  // Active link styling helper
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 700 : 400,
    textDecoration: isActive ? 'underline' : 'none',
    padding: '2px 6px',
    borderRadius: 6,
    backgroundColor: isActive ? '#eee' : 'transparent',
  });

  return (
    <header style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <h1 style={{ margin: 0 }}>Lesson 10 Routing Demo</h1>

      <nav style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>

        <NavLink to="/checkout" style={navLinkStyles}>
          Checkout
        </NavLink>

        {user.isLoggedIn && (
          <NavLink to="/account" style={navLinkStyles}>
            Account
          </NavLink>
        )}
      </nav>

      <div style={{ marginTop: 8 }}>
        {user.isLoggedIn ? (
          <span>
            Logged in as <strong>{user.firstName}</strong>
          </span>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </header>
  );
}
