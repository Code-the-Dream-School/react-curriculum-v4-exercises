import { Link, NavLink } from 'react-router-dom';

export default function Header({ user }) {
  // Active link styling helper
  const navLinkStyles = ({ isActive }) => ({
    //{isActive} works if active link is true / matches URL for NavLink
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
      <NavLink to="." style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="checkout" style={navLinkStyles}>
        Checkout
      </NavLink>
      {user.isLoggedIn && (
        <NavLink to="account" style={navLinkStyles}>
          Account
        </NavLink>
      )}
    </header>
  );
}

//Link and NavLink Both navigate without refreshing the page:But only NavLink knows: "Am I the current page?"

// NavLink
// <NavLink to="/checkout">
//   Checkout
// </NavLink>
// Its job is:
// Create a clickable link that changes the URL without refreshing the page.
// AND
// Tell you whether this link is active.

{
  /* <NavLink to="/checkout">
and says:
isActive = true
because:
Current URL = /checkout
Link destination = /checkout */
}

// BrowserRouter
//       ↓
// controls routing system

// Route
//       ↓
// decides WHAT page to show

// NavLink
//       ↓
// creates navigation links
// and knows if it's active

{
  /* <BrowserRouter>

  <Header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/checkout">Checkout</NavLink>
  </Header>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>

</BrowserRouter>

When you click:
Checkout
the NavLink changes the URL to:
/checkout
The Router notices the URL changed.
The Route for /checkout matches.
React renders:
<Checkout />
and the NavLink automatically becomes active.
So:
Router = traffic controller
Route = page rule ("show Checkout when URL is /checkout")
NavLink = navigation button/link that knows when it's selected. */
}

// isActive, if matches the user clicks the link will be true
