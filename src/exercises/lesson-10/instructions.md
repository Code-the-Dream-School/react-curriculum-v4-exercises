# Lesson 10: React Router & Client-Side Routing

## Exercise Objectives

Welcome to Lesson 10 of the React curriculum! 🎉 For this exercise focuses ONLY on **routing and navigation** inside a React Single Page Application (SPA) using **React Router**.

For this exercise you will practice the key routing tools taught in the article:

- `<Routes>` and `<Route>` for route definitions
- `<Link>` and `<NavLink>` for navigation without refreshing the page
- `useParams()` for reading dynamic URL segments like `/products/:id`
- `useNavigate()` for programmatic navigation (buttons, handlers)
- `useLocation()` for showing information about the current route
- Catch-all `*` routes for 404 pages
- Protecting routes by conditionally defining them

---

## Scenario Details

You are building a small "Routing Demo" app:

- Header and Footer should always render (shared layout)
- The `<main>` section changes based on the URL
- The app includes a dynamic route: `/products/:id`
- The `/account` page must be protected (only exists when logged in)
- Invalid URLs should show a 404 page that displays the invalid path

---

## Exercise 1: Implement Routes + Shared Layout + Protected Route

- In `studentWork.jsx`, implement these routes inside `<main>`:

| Path            | Component                |
| --------------- | ------------------------ |
| `/`             | Home                     |
| `/checkout`     | Checkout                 |
| `/products/:id` | ProductDetails           |
| `/account`      | Account (**protected**)  |
| `*`             | NotFound (**catch-all**) |

- Import the products from the data directory
  - Create a products state variable and assign it the imported value.
  - Pass `products` as a prop to the Home component instance

### Requirements

1. You must use `<Routes>` and `<Route>`
2. Protect `/account`:
   - When logged out, typing `/account` in the URL must NOT show Account
   - Implement this by conditionally defining the Account route only when logged in

---

## Exercise 2: Link vs NavLink + Active Styling

In `components/Header.jsx`:

- Use <NavLink> for internal navigation so users can see which route is active:
  - Home (/)
  - Checkout (/checkout)
  - Account (/account)
- Create a style that applies to the active link so that it is visually different than the others
- Only show the Account link when logged in

---

## Exercise 3: Dynamic Routes

In `pages/Home.jsx`:

- For each product card, add a navigation link that routes to `/products/<product-id>`

In `pages/ProductDetails.jsx`:

- Replace the hardcoded `const id = null;` with the real route param
- Display the `id` value in the UI
- Add a Link back to Home

---

## Exercise 4: useNavigate + useLocation + 404 Support

### Part A — Programmatic Navigation (Checkout)

In `pages/Checkout.jsx`:

- Use `useNavigate()`
- Add a "Go Home" button
- Add a "Back" button

### Part B — NotFound Displays Invalid Path

In `pages/NotFound.jsx`:

- Use `useLocation()` to get the current path
- Display the invalid path in the UI
- Include a Link back Home

---

## Assessment Criteria

### Exercise 1

- The URL changes while navigating
- Protected route works: `/account` is not accessible when logged out
- Catch-all route shows NotFound for unknown paths

### Exercise 2

- NavLink is used for all internal navigation
- Active styling is visible for Account route
- Account link does not appear when logged out

### Exercise 3

- Home creates Links to dynamic product routes (/products/:id)
- ProductDetails correctly reads the id and product lookup works

### Exercise 4

Checkout:

- Browser back/forward buttons behave as users expect
- Users can go to Home using navigate

NotFound:

- Displays the invalid pathname
- Includes a working Link back to /

## Browser back/forward buttons don't behave as users expect

## Reminders

- React Router enables client-side navigation without page reloads
- URLs should change when moving between "pages" in your SPA
- Browser back/forward should work when routing is set up correctly
- `useParams()` always returns strings
- `navigate(-1)` is equivalent to the browser back button
- A catch-all `*` route prevents blank screens for bad URLs
