import { Link } from 'react-router';

export default function Home({ products }) {
  return (
    <section>
      <h2>Home</h2>
      <p>
        Click a product to navigate to <code>/products/id</code>.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
        }}
      >
        {products.map((p) => (
          <article
            key={p.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 10,
              padding: 10,
              background: '#fff',
            }}
          >
            <img
              src={p.previewImage}
              alt={p.name}
              style={{
                width: '100%',
                height: 120,
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />

            <h3 style={{ margin: '10px 0 4px' }}>{p.name}</h3>

            <p style={{ margin: 0 }}>
              <strong>${p.price.toFixed(2)}</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
