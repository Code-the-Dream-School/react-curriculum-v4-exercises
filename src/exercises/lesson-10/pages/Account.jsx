import { Link } from 'react-router-dom';

export default function Account({ user }) {
  return (
    <section>
      <h2>Account</h2>
      <p>
        If you can see this page, you are logged in as{' '}
        <strong>{user.firstName}</strong>.
      </p>
    </section>
  );
}

//  path="lessons/lesson-10/*"
//  means URL = http://localhost:3000/lessons/lesson-10

// <Routes>
//   <Route index element={<Home />} />
//   <Route path="checkout" element={<Checkout />} />
//   <Route path="account" element={<Account />} />
// </Routes>

// relative path: path="checkout"  / this path add to parent path(lessons/lesson-10) /lessons/lesson-10 + checkout -> /lessons/lesson-10/checkout
// absolute path: path="/checkout" / this path will be http://localhost:3000/checkout/ ignore parent path(/lessons/lesson-10)

// <NavLink to="checkout">Checkout</NavLink>

// relative path: to="checkout" / You are at lessons/lesson-10, so /checkout will move to /lessons/lesson-10/checkout
// absolute path: to="/checkout" / will move to /checkout /ignore parent path(/lessons/lesson-10)

// navigate("checkout");
// removeEventListenerelative path: navigate("checkout") / You are at lessons/lesson-10, so /checkout will move to /lessons/lesson-10/checkout
// absolute path: navigate("/checkout") / will move to /checkout / ignore parent path(/lessons/lesson-10)

// "/"
// route on the top
// navigate("/")-> http://localhost:3000/

// "."
// current route
// navigate(".") -> if you are at /lessons/lesson-10 -> /lessons/lesson-10

// ".."
// parent route
// navigate("..") if you are at  /lessons/lesson-10/checkout -> /lessons/lesson-10

// "*"
// <Route path="*" element={<NotFound />} />
// used only for <Route> if nothing matches
