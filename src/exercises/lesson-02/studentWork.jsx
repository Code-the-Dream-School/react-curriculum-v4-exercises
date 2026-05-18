// 1. Create a sub-component for the individual snacks
function SnackItem({ name, rank }) {
  return (
    <li>
      <strong>#{rank}</strong>: {name}
    </li>
  );
}

export default function StudentWork() {
  // 2. Create an array of data
  const snacks = [
    { id: 1, name: "Brazilian Pão de Queijo", rank: 1 },
    { id: 2, name: "Dark Chocolate", rank: 2 },
    { id: 3, name: "Pretzels", rank: 3 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Top Snack Rankings</h2>
      <ul>
        {/* 3. Map through the array to render components */}
        {snacks.map((snack) => (
          <SnackItem 
            key={snack.id} 
            name={snack.name} 
            rank={snack.rank} 
          />
        ))}
      </ul>
    </div>
  );
}