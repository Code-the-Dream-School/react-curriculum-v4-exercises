function SnackList() {
  const snacks = [
    { name: 'cookies', rank: 3 },
    { name: 'chips', rank: 2 },
    { name: 'pretzel', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <h1> Snack List </h1>

      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.name}>
            #{snack.rank} -{snack.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SnackList;
