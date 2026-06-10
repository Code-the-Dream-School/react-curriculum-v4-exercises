import { Link, useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find((p) => String(p.id) === id);

  return (
    <section>
      <h2>Product Details</h2>

      <p>
        Product ID: <code>{id}</code>
      </p>

      {product ? (
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: 10,
            padding: 12,
          }}
        >
          <img
            src={product.previewImage}
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: 420,
              borderRadius: 8,
            }}
          />

          <h3 style={{ marginTop: 10 }}>{product.name}</h3>

          <p style={{ margin: 0 }}>
            <strong>${product.price.toFixed(2)}</strong>
          </p>

          <p style={{ marginTop: 8 }}>{product.description}</p>
        </div>
      ) : (
        <p>
          No product found for id: <code>{id}</code>
        </p>
      )}

      <div style={{ marginTop: 12 }}>
        <Link to="/lessons/lesson-10">Back Home</Link>
      </div>
    </section>
  );
}
