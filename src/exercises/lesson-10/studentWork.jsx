import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Page components — each one is rendered by a matching <Route> below
import Home from './pages/Home.jsx';
import Checkout from './pages/Checkout.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Account from './pages/Account.jsx';
import NotFound from './pages/NotFound.jsx';

// Product data imported from the data directory
import { products as productData } from './data/products.js';

export default function StudentWork() {
  const [user, setUser] = useState({
    isLoggedIn: true,
    firstName: 'Avery',
  });

  // Store the imported products in state so we can pass them to Home/ProductDetails as a prop
  const [products] = useState(productData);

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

      {/* Header renders on every route (shared layout) */}
      <Header user={user} />

      {/* Only the <main> content swaps out as the URL changes.

          NOTE: These are *descendant* routes living under the lesson's base
          path (/lessons/lesson-10). Their paths are therefore RELATIVE — no
          leading "/" — so they resolve to /lessons/lesson-10/<path>. */}
      <main style={{ padding: 12 }}>
        <Routes>
          {/* Home — "index" matches the base path exactly (the lesson root) */}
          <Route index element={<Home products={products} />} />

          {/* Static route for the checkout page */}
          <Route path="checkout" element={<Checkout />} />

          {/* Dynamic route — ":id" becomes a param read via useParams() */}
          <Route
            path="products/:id"
            element={<ProductDetails products={products} />}
          />

          {/* PROTECTED ROUTE:
              The account route is only DEFINED when the user is logged in.
              When logged out, this <Route> doesn't exist at all, so navigating
              to /account falls through to the catch-all NotFound route below. */}
          {user.isLoggedIn && (
            <Route path="account" element={<Account user={user} />} />
          )}

          {/* Catch-all "*" route — shows a 404 page for any unknown URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer renders on every route (shared layout) */}
      <Footer />
    </div>
  );
}
