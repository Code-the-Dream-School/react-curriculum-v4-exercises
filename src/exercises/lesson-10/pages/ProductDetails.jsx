import { Link, useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  return (
    <section>
      <h2>Product Details</h2>
      {product ? (
        <div
          style={{ border: '1px solid #ddd', borderRadius: 10, padding: 12 }}
        >
          <img
            src={product.previewImage}
            alt={product.name}
            style={{ width: '100%', maxWidth: 420, borderRadius: 8 }}
          />
          <h3 style={{ marginTop: 10 }}>{product.name}</h3>
          <p style={{ margin: 0 }}>
            <strong>${product.price.toFixed(2)}</strong>
          </p>
          <p style={{ marginTop: 8 }}>{product.description}</p>
        </div>
      ) : (
        <p>
          No product found for id: <code>{String(id)}</code>
        </p>
      )}
      <div style={{ marginTop: 12 }}>Go Home</div>
      <Link to=".">Go Home</Link>
    </section>
  );
}

// What useParams() actually does
// It simply reads the value from the URL.
// Example route:
// <Route path="/products/:id" element={<ProductDetails />} />
// Now if the URL is:
// /products/tee-002
// React Router automatically extracts:
// useParams() → { id: "tee-002" }

// URL:
// /products/tee-002
// Route definition:
// /products/:id
// Result:
// id = "tee-002"
// ⚡ Then YOU do the searching
// const product = products.find(p => p.id === id);

// So:
// useParams()->	gets value from URL
// find()->	searches your data

// 🔥 Simple mental model
// useParams() = "What is in the URL?"
// NOT:
// ❌ searching data
// ❌ fetching API
// ❌ matching products

// 📦 Full flow
// User clicks:
// /products/mug-003
// Route matches:
// /products/:id
// React gives:
// id = "mug-003"
// You run:
// products.find(...)
// You display product

// useParams() only reads the URL — YOU are responsible for finding the matching data.
