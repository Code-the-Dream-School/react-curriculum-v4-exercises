function SnackHeader() {
  const snackObjects = [
    { name: 'Yogurt', rank: 3 },
    { name: 'Nuts', rank: 2 },
    { name: 'Chips', rank: 1 },
  ];

  const sortedSnacks = snackObjects.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {snack.name} - {snack.rank}
        </li>
      ))}
    </ol>
  );
}
export default SnackHeader;
