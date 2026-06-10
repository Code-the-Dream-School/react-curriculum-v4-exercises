import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Checkout from './pages/Checkout.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Account from './pages/Account.jsx';
import NotFound from './pages/NotFound.jsx';
import { products } from './data/products.js';

export default function StudentWork() {
  const [user, setUser] = useState({
    isLoggedIn: true,
    firstName: 'Avery',
  });
  const [productsState] = useState(products);

  function toggleLogin() {
    setUser((u) => ({ ...u, isLoggedIn: !u.isLoggedIn }));
  }

  return (
    <div
      style={{
        fontFamily: 'system-ui, Arial',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <aside
        style={{
          padding: 12,
          marginTop: 8,
          background: '#fafafa',
          border: '1px solid #eee',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Debug Panel</h3>
        <p>
          Toggle login to test protected routing behavior. When logged out,
          typing <code>/account</code> should NOT show Account.
        </p>
        <button onClick={toggleLogin}>Toggle Logged In</button>
      </aside>

      <Header user={user} />

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home products={productsState} />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/products/:id"
            element={<ProductDetails products={productsState} />}
          ></Route>
          {user.isLoggedIn && ( //only show account if logged in
            <Route path="/account" element={<Account />}></Route>
          )}
          <Route path="/*" element={<NotFound />}></Route>
          {/* if nothing matches above, show 404 */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

// Route
// <Route path="/checkout" element={<Checkout />} />
// Its job is:
// If the URL matches this path, render this component.
// Example:
// URL = /checkout
// renders:
// <Checkout />

// Suppose URL is:
// /checkout
// Router sees:
// Current URL = /checkout
// Route matches:
// <Route path="/checkout" element={<Checkout />} />
// and renders:
// <Checkout />

// Route itself has no clickable link, but still works if you type in address bar
// with NavLink, you can click and navigate to matched page

// Route = renders a component based on URL
// Link = navigates to a URL (no active awareness)
// NavLink = navigates + knows if it is active (used for styling menus)

// Route → defines pages
// Link → moves between pages
// NavLink → navigation with “active page highlight”

// useParams	reads dynamic values like /products/:id
// useLocation	reads full current URL
// useNavigate	changes route in code
