import { Link, useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  // useParams() reads dynamic URL segments. For "/products/:id"
  // this returns { id: "..." }. NOTE: params are ALWAYS strings.
  const { id } = useParams();

  // Look up the matching product. product.id is a string, and id is a
  // string from the URL, so === compares correctly.
  const product = products.find((p) => p.id === id);

  return (
    <section>
      <h2>Product Details</h2>

      {/* Show the id read from the route so it's visible in the UI */}
      <p>
        Showing product for id: <code>{id}</code>
      </p>

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

      {/* Link back to Home. ".." steps up one route level — from
          products/:id back to the lesson base (Home) — no reload. */}
      <div style={{ marginTop: 12 }}>
        <Link to="..">Go Home</Link>
      </div>
    </section>
  );
}
