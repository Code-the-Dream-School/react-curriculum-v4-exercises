function SnackList() {
  const snacks = [
    { name: 'Chips', rank: 3 },
    { name: 'Chocolate', rank: 1 },
    { name: 'Popcorn', rank: 2 },
    { name: 'Cookies', rank: 4 },
  ];

  // sort from most favorite (1) -> least favorite
  const sortedSnacks = snacks.sort((a, b) => a.rank - b.rank);

  return (
    <ul>
      {sortedSnacks.map((snack, index) => (
        <li key={index}>{snack.name}</li>
      ))}
    </ul>
  );
}

export default SnackList;
