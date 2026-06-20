import { NavLink } from 'react-router-dom';

export default function Header({ user }) {
  // Style callback for NavLink — React Router passes { isActive }
  // so we can visually highlight the link matching the current URL.
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
        {/* NavLink updates the URL without a page refresh and applies
            active styling automatically. Paths are RELATIVE to the lesson
            base, so "." is Home and "checkout"/"account" are its siblings.
            "end" makes Home active ONLY at the base, not on every sub-route. */}
        <NavLink to="." style={navLinkStyles} end>
          Home
        </NavLink>

        <NavLink to="checkout" style={navLinkStyles}>
          Checkout
        </NavLink>

        {/* Only show the Account link when the user is logged in */}
        {user.isLoggedIn && (
          <NavLink to="account" style={navLinkStyles}>
            Account
          </NavLink>
        )}

        {/* External link — a plain <a> (NOT NavLink) because it leaves the SPA */}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
          target="_blank"
          rel="noreferrer"
        >
          History API (MDN)
        </a>
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
