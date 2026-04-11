function SnackList() {
  const snack = [
    {
      name: 'cookie',
      rank: 1,
    },
    { name: 'chips', rank: 2 },
    { name: 'chocolates', rank: 1 },
    { name: 'salsa', rank: 4 },
    { name: 'frenchfries', rank: 5 },
  ];

  const sortedSnacks = snack.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <ol>
        {sortedSnacks.map((item) => (
          <li key={item.rank}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default SnackList;
