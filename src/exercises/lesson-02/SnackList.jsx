function SnackList() {
  const listSnacks = [
    { id: 1, name: 'Yogurt', rank: 3 },
    { id: 2, name: 'Blueberry', rank: 4 },
    { id: 3, name: 'Honey Bun', rank: 5 },
    { id: 4, name: 'Gummy Worms', rank: 2 },
    { id: 5, name: 'Orange', rank: 1 },
  ];

  const sortedSnacks = listSnacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <>
      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.id}>{snack.name}</li>
        ))}
      </ol>
    </>
  );
}

export default SnackList;
