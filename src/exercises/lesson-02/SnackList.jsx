export default function SnackList() {
  const snacks = [
    { name: 'Chips', rank: 3 },
    { name: 'Chocolate', rank: 1 },
    { name: 'Popcorn', rank: 2 },
    { name: 'Cookies', rank: 4 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <h2>My Favorite Snacks</h2>
      <o1>
        {sortedSnacks.map((snack, index) => (
          <li key={index}>
            {snack.name} (Rank: {snack.rank})
          </li>
        ))}
      </o1>
    </div>
  );
}
